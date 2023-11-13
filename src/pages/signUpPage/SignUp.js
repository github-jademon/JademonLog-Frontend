import React, { useRef, useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button } from "components";

const SignUp = ({ setIsSignup, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordck, setPasswordck] = useState("");
  const [valid_email, setValidEmail] = useState("");
  const [valid_userid, setValidUserid] = useState("");
  const [valid_password, setValidPassword] = useState("");
  const [valid_password2, setValidPassword2] = useState("");
  const modalBackground = useRef();

  const submit = async () => {
    const body = {
      email: email,
      userid: userid,
      password: password,
      passwordck: passwordck,
    };
    console.log(body);
    const res = await axios
      .post(`/auth/signup`, body)
      .catch((error) => console.log(error));

    if (res.data.responseMessage === "비밀번호가 다릅니다") {
      setValidPassword2(res.data.responseMessage);
    } else if (res.data.responseMessage) {
      alert(res.data.responseMessage);
      window.location.href = "/signin";
    } else {
      setValidEmail(res.data.valid_email);
      setValidPassword(res.data.valid_password);
      setValidUserid(res.data.valid_userid);
    }

    console.log(res);
  };

  return (
    <div
      className="container loginContainer"
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          setIsSignup(false);
        }
      }}
    >
      <div className="loginSubContainer">
        <div className="title">회원가입</div>
        <div className="signup__inputContainer">
          <label name="email" className="signup__label">
            이메일
          </label>
          <input
            className="signup__input"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {valid_email ? <span className="valid-ck">{valid_email}</span> : null}
        </div>
        <div className="signup__inputContainer">
          <label name="userid" className="signup__label">
            아이디
          </label>
          <input
            className="signup__input
            
            "
            type="text"
            id="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
          {valid_userid ? (
            <span className="valid-ck">{valid_userid}</span>
          ) : null}
        </div>
        <div className="signup__inputContainer">
          <label name="password" className="signup__label">
            비밀번호
          </label>
          <input
            className="login__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {valid_password ? (
            <span className="valid-ck">{valid_password}</span>
          ) : null}
        </div>
        <div className="signup__inputContainer">
          <label name="passwordck" className="signup__label">
            비밀번호확인
          </label>
          <input
            className="login__input"
            type="password"
            id="passwordck"
            value={passwordck}
            onChange={(e) => setPasswordck(e.target.value)}
          />
          {valid_password2 ? (
            <span className="valid-ck">{valid_password2}</span>
          ) : null}
        </div>
        <div className="signup__button">
          <Button type="button" name="회원가입" onClick={() => submit()} />
        </div>
        <div
          onClick={() => {
            setIsSignup(false);
            setIsLogin(true);
          }}
        >
          이미 회원이신가요? 로그인
        </div>
        {/* <li>
          <NavLink to="/password">비밀번호를 잊으셨나요? 비밀번호변경</NavLink>
        </li> */}
      </div>
    </div>
  );
};

export default SignUp;
