"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "@/hooks/useUser";
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
      <nav className="nav-wrapper">
        <Link href="/" className="home">
          마음 처방전
        </Link>

        <ul className="menu">
          <Link href="/login">
            <li>간편 로그인</li>
          </Link>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="nav-wrapper">
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
        <Link href="/mypage">
          <li>마이 페이지</li>
        </Link>
        <button>로그아웃</button>
      </ul>
    </nav>
  );
};
