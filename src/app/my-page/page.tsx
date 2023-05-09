'use client';
import * as React from 'react';
import { useState, useRef } from 'react';
import Tabs from '@mui/base/Tabs';
import { UserInfoContainer, Avatar, UserInfoText, StyledTabsList, StyledTab, StyledTabPanel } from '../../styles/myPage.styled';
import AccountDelete from '../../components/my-page/accountDelete';
import Contents from '../../components/my-page/myContents';
import Comments from '../../components/my-page/myComments';
import Bookmark from '../../components/my-page/myBookmark';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

//TODO 폼데이터 해결!! + apiClient
import multipartClient from '@http/apiClient';
interface UserInfo {
  nickname: string;
}

export default function MyPage() {
  const [value, setValue] = React.useState(0);
  const [profileImage, setProfileImage] = React.useState<string | ArrayBuffer | null>('/profile-img.png');
  const imageRef = React.useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false); // 수정 버튼 클릭 시 true로 변경
  const inputRef = useRef<HTMLInputElement>(null); // 입력값을 받아오기 위한 Ref

  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent<Element, Event> | null, newValue: string | number | null) => {
    if (typeof newValue === 'number' && newValue === 3) {
      handleModalOpen(); // 탭 4번을 클릭할 때 모달 열기
    } else if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  const userInfo: UserInfo = {
    nickname: '홍길동',
  };
  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      try {
        await multipartClient.uploadImage(file); // 이미지 업로드 함수 호출
      } catch (error) {
        console.error('Image upload failed:', error);
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImage(reader.result);
      };
    }
  };

  const handleAvatarClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  // 수정 버튼 클릭 시 isEditing 값을 true로 변경
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 수정 완료 버튼 클릭 시 isEditing 값을 false로 변경
  // inputRef.current.value 값을 userInfo.nickname으로 변경
  const handleCompleteClick = () => {
    setIsEditing(false);
    if (inputRef.current) {
      userInfo.nickname = inputRef.current.value;
    }
  };

  return (
    <div className="body-box">
      <UserInfoContainer>
        <input type="file" ref={imageRef} accept="image/*" style={{ display: 'none' }} onChange={handleChangeFile} />
        <Avatar src={profileImage as string} onClick={handleAvatarClick} />
        <UserInfoText style={{ display: 'flex', alignItems: 'center' }}>
          {isEditing ? (
            // 수정 중일 때 input 요소
            <Input type="text" defaultValue={userInfo.nickname} ref={inputRef} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray', fontSize: '14px' }} />
          ) : (
            // 수정 중이 아닐 때 h2 요소
            <h2>{userInfo.nickname}</h2>
          )}
          {/* 수정 버튼 */}
          {!isEditing && (
            <Button style={{ margin: '-10px' }} onClick={handleEditClick}>
              <EditIcon color="action" />
            </Button>
          )}
          {/* 수정 완료 버튼 */}
          {isEditing && (
            <Button onClick={handleCompleteClick}>
              <EditIcon color="action" />
            </Button>
          )}
        </UserInfoText>
      </UserInfoContainer>

      <Tabs value={value} onChange={handleChange}>
        <StyledTabsList>
          <StyledTab value={0}>내가 쓴 글</StyledTab>
          <StyledTab value={1}>내가 쓴 댓글</StyledTab>
          <StyledTab value={2}>북마크</StyledTab>
          <StyledTab value={3}>회원탈퇴</StyledTab>
        </StyledTabsList>
        <StyledTabPanel value={0}>
          <Contents />
        </StyledTabPanel>
        <StyledTabPanel value={1}>
          <Comments />
        </StyledTabPanel>
        <StyledTabPanel value={2}>
          <Bookmark />
        </StyledTabPanel>
        <StyledTabPanel value={3}></StyledTabPanel>
        <AccountDelete open={modalOpen} handleClose={handleModalClose} />
      </Tabs>
    </div>
  );
}
