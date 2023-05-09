'use client';
import React from 'react';
import { LoginBox, LoginContainer } from '../../styles/login.styled';
import Link from 'next/link';
import { SERVER_URL } from '@/common/constants';
import Image from 'next/image';

export default function Login() {
  // axios.get('a', {
  //   withCredentials: true -> 쿠키 보낼 때 필요
  // });
  return (
    <LoginContainer>
      <h3>로그인</h3>
      <LoginBox>
        <Link href={`${SERVER_URL}/auth/login/kakao`}>
          <Image src="/kakao_login.png" alt="kakao" width={200} height={50} />
        </Link>
        <Link href={`${SERVER_URL}/`}>
          <Image src="/naver_login.png" alt="naver" width={200} height={50} />
        </Link>
      </LoginBox>
    </LoginContainer>
  );
}
