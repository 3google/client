'use client';
import React from 'react';
import { RegisterBox, RegisterContainer } from './register.styled';

export default function Register() {
  const [profileImage, setProfileImage] = React.useState<string | ArrayBuffer | null>('/profile.jpeg');
  const imageRef = React.useRef<HTMLInputElement>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setProfileImage(reader.result);
      };
    }
  };

  const handleDeletePreviewFile = (e: React.MouseEvent) => {
    e.preventDefault();
    if (imageRef.current) {
      imageRef.current.value = '';
      setProfileImage('/profile.jpeg');
    }
  };

  return (
    <RegisterContainer>
      <h3>회원가입 진행</h3>
      <RegisterBox>
        <form>
          {profileImage && <img src={profileImage.toString()} className="pre-img" />}
          <label className="button" for="input-file">
            프로필 사진 추가
          </label>
          <input
            type="file"
            ref={imageRef}
            className="profile-img-input"
            id="input-file"
            accept="image*"
            name="profile_img"
            style={{ display: 'none' }} //TODO:스타일 빼기
            onChange={handleChangeFile}
          ></input>
          {/* TODO 중복확인 */}
          <label>닉네임</label>
          <input placeholder="nickname" />
          {/* TODO: 클릭시 폼 서버에 제출 */}
          <button className="button">회원가입 완료!</button>
        </form>
      </RegisterBox>
    </RegisterContainer>
  );
}
