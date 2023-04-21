export default function Home() {
  // const validateForm = ({
  //   name,
  //   nickname,
  //   email,
  //   password,
  //   confirmPassword,
  // }) => {
  //   if (emailCheck(email) === false) {
  //     return "이메일 형식이 올바르지 않습니다.";
  //   }
  //   if (name.length < 2) {
  //     return "두글자 이상의 이름을 설정해주세요.";
  //   }
  //   if (nickname.length < 2) {
  //     return "두글자 이상의 닉네임을 설정해주세요.";
  //   }
  //   if (password.length < 4) {
  //     return "비밀번호는 4글자 이상이어야합니다.";
  //   }
  //   if (password !== confirmPassword) {
  //     return "비밀번호가 일치하지 않습니다.";
  //   }
  //   return true;
  // };

  return (
    <div className="form-box">
      <h3>회원가입</h3>
      <form className="login_sign_form">
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          // value={inputs.nickname}
          // onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          // value={inputs.email}
          // onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          // value={inputs.password}
          // onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          // value={inputs.confirmPassword}
          // onChange={handleChange}
        />
        <button type="submit" className="button">
          회원가입
        </button>
      </form>
    </div>
  );
}
