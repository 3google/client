"use client";
import React from "react";
import { LoginBox, LoginContainer } from "./login.styled";
import Link from "next/link";
import { SERVER_URL } from "@/common/constants";

export default function Login() {
  return (
    <LoginContainer>
      <h3>로그인</h3>
      <LoginBox>
        {/* TODO: */}
        {/* 서버연결하고나서
        <Link href={`${SERVER_URL}/api/auth/login/kakao`}>
          <img src="/kakao_login.png"></img>
        </Link> */}

        {/* 일단 임시로 여기로 보낸다고 가정 */}
        <Link href="/register">
          <img src="/kakao_login.png"></img>
        </Link>
        <a href="/">
          <img src="/naver_login.png" style={{ height: "45px" }}></img>
        </a>
      </LoginBox>
    </LoginContainer>
  );
}
