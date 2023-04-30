"use client";
import React from "react";
import { RegisterBox, RegisterContainer } from "./register.styled";

export default function Register() {
  const onChange = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img); //key/value 쌍을 추가
  };

  return (
    <RegisterContainer>
      <h3>회원가입</h3>
      <RegisterBox>
        <form>
          <div>
            {/* TODO: 이미지 미리보기 */}
            <label className="button" for="input-file">
              프로필 사진 추가
            </label>
            <input
              type="file"
              className="profile-img-input"
              id="input-file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profile_img"
              style={{ display: "none" }} //TODO:스타일 빼기
              onChange={onChange}
            ></input>
          </div>
          <label>닉네임</label>
          <input placeholder="nickname" />
          {/* TODO: 클릭시 폼 서버에 제출 */}
          <button className="button">회원가입 완료!</button>
        </form>
      </RegisterBox>
    </RegisterContainer>
  );
}
