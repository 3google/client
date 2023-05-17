'use client';
import * as React from 'react';
import { useState, useRef } from 'react';
import Tabs from '@mui/base/Tabs';
import {
  UserInfoContainer,
  Avatar,
  UserInfoText,
  StyledTabsList,
  StyledTab,
  StyledTabPanel,
} from '@styles/myPage.styled';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import AccountDelete from '@components/my-page/accountDelete';
import Contents from '@components/my-page/myContents';
import Comments from '@components/my-page/myComments';
import Bookmark from '@components/my-page/myBookmark';
import { useUserProfile, useUpdateProfileImg, useUpdateNickname } from '@hooks/useUserProfile';
import { SOCIAL_TYPE } from '@common/constants';

// help me! 코드 작동 O, 수정하고 리프래쉬하면 수정한거 사라짐, 네비게이션 사진 안바뀜
// TODO 프론트에서 이미지, 닉네임 변경되어 완료까지 뜨는데,,백엔드에서 변경이 되지 않음,, console 400 error 발생
export default function MyPage() {
  const [value, setValue] = React.useState(0);
  const imageRef = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false); // 수정 버튼 클릭 시 true로 변경
  const inputRef = useRef<HTMLInputElement>(null); // 입력값을 받아오기 위한 Ref

  // 백엔드에서 social 정보 string으로 받아옴
  // 사용자 정보가 로드되면 해당 정보를 사용하여 상태를 설정
  const { user } = useUserProfile();
  const [nickname, setNickname] = useState<string>();
  const [profileImg, setProfileImg] = useState<string>();
  const [platform, setPlatform] = useState<keyof typeof SOCIAL_TYPE>();

  React.useEffect(() => {
    if (!user) return;
    setNickname(user?.nickname ?? '길동씨');
    setProfileImg(user?.profileImg ?? '/profile-img.png');
    setPlatform(user?.platform);
  }, [user]);

  const { mutate: updateNickname } = useUpdateNickname();
  const { mutate: updateProfileImg, isLoading: isUpdating } = useUpdateProfileImg();
  const handleCompleteClick = async () => {
    if (!inputRef.current || !nickname) return;
    try {
      // 프로필 이미지 업데이트가 필요한 경우
      if (imageRef.current?.files?.[0]) {
        await updateProfileImg({
          profileImg: imageRef.current.files[0],
        });
        console.log('프로필 이미지 업데이트 완료');
      }
      //
      // 닉네임 업데이트가 필요한 경우
      if (inputRef.current.value !== user?.nickname) {
        await updateNickname(inputRef.current.value);
        console.log('닉네임 업데이트 완료');
      }

      // 프로필 업데이트가 성공하면 isEditing을 false로 설정하여 수정 모드를 종료
      alert('프로필 수정이 완료되었습니다.');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // 이미지 변경 이벤트를 처리하는 함수
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    setProfileImg(URL.createObjectURL(files[0]));
  };

  // modal
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModalOpen = () => {
    setIsOpenModal(true);
  };
  const handleModalClose = () => {
    setIsOpenModal(false);
  };
  const handleChange = (event: React.SyntheticEvent<Element, Event> | null, newValue: string | number | null) => {
    if (typeof newValue === 'number') {
      newValue === 3 ? handleModalOpen() : setValue(newValue);
    } // 탭 4번을 클릭할 때 모달 열기
  };

  //프로필 이미지를 클릭했을 때 호출
  const handleAvatarClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  // 사용자가 닉네임 옆의 수정 버튼을 클릭했을 때 호출
  // 수정 버튼 클릭 시 isEditing 값을 true로 변경
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // 닉네임 변경 이벤트를 처리하는 함수
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) return;
    setNickname(value);
  };

  return (
    <div className="body-box">
      <UserInfoContainer>
        <input type="file" ref={imageRef} accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
        <Avatar src={profileImg as string} onClick={handleAvatarClick} />
        <UserInfoText style={{ display: 'flex', alignItems: 'center' }}>
          {isEditing ? (
            // 수정 중일 때 input 요소
            <Input
              type="text"
              defaultValue={nickname}
              ref={inputRef}
              onChange={handleNicknameChange}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray', fontSize: '14px' }}
            />
          ) : (
            <div>{nickname}</div>
          )}
          {/* 수정 버튼 */}
          {isEditing ? (
            <Button onClick={handleCompleteClick} disabled={isUpdating}>
              {isUpdating ? 'Updating...' : <EditIcon color="action" />}
              {/* <EditIcon color="action" /> */}
            </Button>
          ) : (
            <Button style={{ margin: '-10px' }} onClick={handleEditClick}>
              <EditIcon color="action" />
            </Button>
          )}
        </UserInfoText>
        {platform && SOCIAL_TYPE.KAKAO ? (
          <img src="/kakao-icon.png" alt="Kakao" width="60" height="30" />
        ) : (
          <img src="/naver-icon.png" alt="Naver" width="60" height="30" />
        )}
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
        <AccountDelete open={isOpenModal} handleClose={handleModalClose} />
      </Tabs>
    </div>
  );
}
