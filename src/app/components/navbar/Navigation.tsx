'use client';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@/hooks/useUser';
import { Nav } from './Navigation.styled';
import axios from 'axios';
import { SERVER_URL } from '@/common/constants';
import { Navigate } from 'react-router';
// import { useSession, signOut } from "next-auth/react";

//임시 Dto
export interface TempUserDto {
  email: string;
  name: string;
}

export const Navigation = () => {
  const logoutHandler = () => {
    axios.get(`${SERVER_URL}/logout`).then((res) => {
      if (res.data) {
        alert('로그아웃 완료');
        // Navigate('/');
      } else {
        console.log('로그아웃 실패');
      }
    });
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
          <img src="user.png" className="nav-user-profile-dropbtn" />
          <div className="dropdown-content">
            <button className="button">{user.name}님</button>
            <button className="button" onClick={logoutHandler}>
              logout
            </button>
          </div>
        </div>
      </ul>
    </Nav>
  );
};
