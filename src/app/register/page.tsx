export default function Register() {
  return (
    <div className="register-form-box">
      <h3>회원가입</h3>
      <form className="login-sign-form">
        <a href="/">
          <button className="button">카카오로 회원가입</button>
        </a>
        <a href="/">
          <button className="button">네이버로 회원가입</button>
        </a>
      </form>
    </div>
  );
}
