'use client';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@hooks/useUser';
import { Nav } from '../../styles/Navigation.styled';
import axios from 'axios';
import { SERVER_URL } from '@common/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const Navigation = () => {
  const router = useRouter();
  const mypageHandler = () => {
    router.push('/my-page');
  };

  const { user, isLoading, error } = useUser();
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    const e = error as Error;
    return <h1>{e.message}</h1>;
  }

  if (!user) {
    return (
      <Nav className="nav-wrapper">
        <Link href="/" className="home">
          마음 처방전
        </Link>

        <ul className="menu">
          <Link href="/login">
            <img src="user.png" className="nav-user-profile" />
          </Link>
        </ul>
      </Nav>
    );
  }

  return (
    <header>
      <Nav className="nav-wrapper">
        <Link href="/" className="home">
          마음 처방전
        </Link>
        <ul className="menu">
          <Link href="/public-board">
            <li>공유게시판</li>
          </Link>
          <Link href="/recommend-board">
            <li>추천게시판</li>
          </Link>
          <div className="dropdown">
            {/* TODO: 서버에 저장된 프사 이미지 보여줌 */}
            <Image src="/user.png" className="nav-user-profile-dropbtn" width={50} height={50} alt="유저 기본 이미지" />
            <div className="dropdown-content">
              <button className="button" onClick={mypageHandler}>
                {user.name}
              </button>

              {/* 쿠키면 로그아웃도 그냥 링크로 보내면 됨 */}
              <Link href={`${SERVER_URL}/auth/logout`}>
                <button className="button">logout</button>
              </Link>
            </div>
          </div>
        </ul>
      </Nav>
    </header>
  );
};
