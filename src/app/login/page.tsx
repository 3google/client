export default function Login() {
  return (
    <div className="login-form-box">
      <h3>로그인</h3>
      <form className="login-sign-form">
        <input
          type="email"
          name="email"
          // value={inputs.email}
          placeholder="이메일"
          // onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          // value={inputs.password}
          placeholder="비밀번호"
          // onChange={handleChange}
          required
        />
        <button type="submit" className="button">
          ♦️ 로그인 하기 ♦️
        </button>

        <a href="">
          <button className="button">카카오 로그인</button>
        </a>
        <a href="/register">
          <button className="button">회원가입 하기</button>
        </a>
      </form>
    </div>
  );
}
