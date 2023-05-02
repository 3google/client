'use client';
import React from 'react';
import { LoginBox, LoginContainer } from './login.styled';
import Link from 'next/link';
import { SERVER_URL } from '@/common/constants';
import axios from 'axios';
import { Navigate } from 'react-router';

export default function Login() {
  const onKakaoLogin = () => {
    axios
      .get(`${SERVER_URL}/auth/login/kakao`)
      .then((res) => {
        const { accessToken } = res.data;
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        //토큰 저장해두기
        //성공하면 register페이지로 이동!!
        Navigate('/register');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <LoginContainer>
      <h3>로그인</h3>
      <LoginBox>
        <div onClick={onKakaoLogin}>
          <img src="/kakao_login.png"></img>
        </div>
        <a href="/">
          <img src="/naver_login.png" style={{ width: '183px' }}></img>
        </a>
      </LoginBox>
    </LoginContainer>
  );
}
