import React, { useRef, useState } from "react";
import "./Login.css";
import { Button } from "components";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = ({ setIsLogin, setIsSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalBackground = useRef();

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post("/auth/login", body)
      .then(function (response) {
        console.log(response);
        if (response.data.result) {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.result.token)
          );
          setIsLogin(false);
        } else {
          alert(response.data.responseMessage);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="container loginContainer"
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          setIsLogin(false);
        }
      }}
    >
      <div className="login__subContainer">
        <div className="title login__title">로그인</div>
        <div className="login__inputContainer">
          <div className="login__label">이메일</div>
          <input
            className="login__input"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__inputContainer">
          <div className="login__label">비밀번호</div>
          <input
            className="login__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login__button">
          <Button name={"로그인"} onClick={login} />
        </div>
        <div
          onClick={() => {
            setIsLogin(false);
            setIsSignup(true);
          }}
        >
          회원이 아니신가요? 회원가입
        </div>
      </div>
    </div>
  );
};

export default Login;
