import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Button, HeaderElement } from "components";
import { Login, SignUp } from "pages";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [hoverAction, setHoverAciont] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState({
    name: "Jademon",
    img: `${process.env.PUBLIC_URL}/404.png`,
  });

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    setToken(isToken);
    setToken(true);
  });

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="header">
      <div className="container header__container">
        <Link to={`/`} className="header__logo">
          <img
            src={`${process.env.PUBLIC_URL}/JademonLog.png`}
            className="logo"
          />
        </Link>

        {token ? (
          <div className="row-container">
            <Link to={`/write`} className="button header__button">
              새 글 작성
            </Link>
            <div>
              {hoverAction ? (
                <div
                  className="header__profile--action"
                  onClick={() => setHoverAciont(false)}
                >
                  <div className="header__profile">
                    <img src={user.img} className="header__profileImg" />
                    <div className="header__userName">{user.name}</div>
                  </div>
                  <div className="container header__profileContainer">
                    <HeaderElement name="내 로그" onClick="/mypage" />
                    <HeaderElement name="임시 글" onClick="/saves" />
                    {/* <HeaderElement name="읽기 목록" onClick="/lists" /> */}
                    <HeaderElement name="설정" onClick="/setting" />
                    <HeaderElement
                      name="로그아웃"
                      onClick={logout}
                      type="func"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="header__profile"
                  onClick={() => setHoverAciont(true)}
                >
                  <img src={user.img} className="header__profileImg" />
                  <div className="header__userName">{user.name}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="headerButtonContainer">
            <div className="button" onClick={() => setIsSignup(true)}>
              회원가입
            </div>
            <div className="button" onClick={() => setIsLogin(true)}>
              로그인
            </div>
          </div>
        )}
      </div>
      {isSignup ? (
        <SignUp setIsLogin={setIsLogin} setIsSignup={setIsSignup} />
      ) : null}
      {isLogin ? (
        <Login setIsLogin={setIsLogin} setIsSignup={setIsSignup} />
      ) : null}
    </div>
  );
};

export default Header;
