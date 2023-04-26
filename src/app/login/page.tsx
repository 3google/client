// import { signIn } from "next-auth/react";
import { KAKAO_AUTH_URL } from "../components/OAuth";
import { LoginBox, LoginContainer } from "./login.styled";

export default function Login() {
  return (
    <LoginContainer>
      <h3>로그인</h3>
      <LoginBox>
        <a
          href={KAKAO_AUTH_URL}
          // onClick={() => signIn("kakao")}
        >
          <img src="/kakao_login.png"></img>
        </a>
        <a href="/">
          <img src="/naver_login.png" style={{ height: "45px" }}></img>
        </a>
      </LoginBox>
    </LoginContainer>
  );
}
