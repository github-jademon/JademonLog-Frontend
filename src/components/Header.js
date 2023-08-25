import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hoverAction, setHoverAciont] = useState(false);
  const [user, setUser] = useState({
    name: "Jademon",
    img: `${process.env.PUBLIC_URL}/404.png`,
  });
  return (
    <div className="header">
      <div className="container">
        <Link to={`/`} className="title">
          JademonLog
        </Link>
        {hoverAction ? (
          <div className="action-profile" onClick={() => setHoverAciont(false)}>
            <div className="profile">
              <img src={user.img} />
              <div className="title">{user.name}</div>
            </div>
            <div className="container">
              <div>
                <Link to={`/mypage`} className="center">
                  마이페이지
                </Link>
              </div>
              <div>로그아웃</div>
            </div>
          </div>
        ) : (
          <div className="profile" onClick={() => setHoverAciont(true)}>
            <img src={user.img} />
            <div className="title">{user.name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
