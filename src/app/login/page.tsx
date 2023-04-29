export default function Login() {
  return (
    <div className="login-form-box">
      <h3>로그인</h3>
      <form className="login-sign-form">
        <a href="/">
          <button className="button">카카오 로그인</button>
        </a>
        <a href="/">
          <button className="button">네이버 로그인</button>
        </a>
        <a href="/register">
          <button className="button">회원 가입 하기</button>
        </a>
      </form>
    </div>
  );
}
