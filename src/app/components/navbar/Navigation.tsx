'use client';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@/hooks/useUser';
import { Nav } from './Navigation.styled';
// import { useSession, signOut } from "next-auth/react";

//임시 Dto
export interface TempUserDto {
  email: string;
  name: string;
}

export const Navigation = () => {
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
          {/* TODO: 서버에 저장된 프사 이미지 보여줌, 드롭다운 */}
          <img src="user.png" className="nav-user-profile-dropbtn" />
          <div className="dropdown-content">
            <Link href="/my-page">마이페이지</Link>
            <Link href="#">로그아웃</Link>
          </div>
        </div>
      </ul>
    </Nav>
  );
};
