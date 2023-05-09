'use client';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@hooks/useUser';
import { Nav } from '../../styles/Navigation.styled';
import { SERVER_URL } from '../../common/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const Navigation = () => {
  const router = useRouter();

  const mypageHandler = () => {
    router.push('/my-page');
  };

  const { user } = useUser();

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
            {/* TODO:(쏘쏘) 오류나는데 동작은 함 */}
            <Image src={user.profileImg} className="nav-user-profile-dropbtn" width={50} height={50} alt="유저 기본 이미지" />
            <div className="dropdown-content">
              <button className="button" onClick={mypageHandler}>
                {user.nickname}
              </button>

              {/* 로그아웃도 그냥 링크로 연결하면 됨 */}
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
