'use client';
import React from 'react';
import { LoginBox, LoginContainer } from './login.styled';
import Link from 'next/link';
import { SERVER_URL } from '@/common/constants';

export default function Login() {
  // axios.get('a', {
  //   withCredentials: true -> 쿠키 보낼 때 필요
  // });
  return (
    <LoginContainer>
      <h3>로그인</h3>
      <LoginBox>
        <Link href={`${SERVER_URL}/auth/login/kakao`}>
          <img src="/kakao_login.png"></img>
        </Link>
        <a href="/">
          <img src="/naver_login.png" style={{ width: '183px' }}></img>
        </a>
      </LoginBox>
    </LoginContainer>
  );
}
