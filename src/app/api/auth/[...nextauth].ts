import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

//import한 Provider의 종류에 따라 다양한 종류 (구글, 깃허브, 네이버, 애플 등등...)의 소셜로그인을 구현할 수 있다.
export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
});
