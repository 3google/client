"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
// import { useSession, signOut } from "next-auth/react";

export const Navigation = () => {
  const [isRender, setIsRender] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setIsRender(true);
  }, []);

  React.useEffect(() => {
    //인가코드
    const code = new URL(window.location.href).searchParams.get("code");

    console.log("카카오 인가코드가 아래에!!");
    console.log(code); //콘솔에 나옴!

    //인가코드를 백에 보내서 토큰 받기 이렇게 하는게 맞나요??? 근데 이런건 백에서 하는거 아닌가용??
    // const getKakaoToken = async () => {
    //   try {
    //     const response = await fetch({
    //       method: "post",
    //       url: "https://kauth.kakao.com/oauth/token",
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       },
    //       data: `grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`,
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     setIsLoggedIn(true);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
  }, [isRender]);

  return (
    <nav className="nav-wrapper">
      <Link href="/" className="home">
        마음 처방전
      </Link>

      {/* 로그인 전(세션이 없을 때) 메뉴 */}
      {/* {!session && ( */}
      <ul className="menu">
        <Link href="/login">
          <li>간편 로그인</li>
        </Link>
      </ul>
      {/* )} */}

      {/* 로그인 후(세션이 있을때) 메뉴 */}
      {/* {session && (
        <ul className="menu">
          <Link href="/public-board">
            <li>공유게시판</li>
          </Link>
          <Link href="/recommend-board">
            <li>추천게시판</li>
          </Link>
          <Link href="/mypage">
            <li>{session.user.name}님의 페이지</li>
          </Link>
          <button onClick={() => signOut()}>로그아웃</button>
        </ul>
      )} */}
    </nav>
  );
};
