import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onPasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitHandler = () => {};

  return (
    <>
      <div className="login-box__container">
        <form onSubmit={onSubmitHandler}>
          <div className="login-input__container">
            <input
              type="email"
              value={email}
              placeholder="이메일 아이디"
              onChange={onEmailHandler}
              className="login-email__input"
            />
          </div>
          <div className="login-input__container">
            <input
              type="password"
              value={password}
              placeholder="비밀번호"
              onChange={onPasswordHandler}
              className="login-password__input"
            />
          </div>

          <div className="login-button__container">
            <button type="submit" className="login__button">
              로그인
            </button>
          </div>
        </form>
        <div className="login-option__container">
          <div>
            <span>아이디 찾기</span>
            <span>비밀번호 찾기</span>
          </div>
          <span>회원가입</span>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
