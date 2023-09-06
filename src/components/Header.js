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

        <div className="row-container">
          <Link
            to={`/write`}
            className="col-center row-center button"
            style={{ width: "100px", margin: "8px" }}
          >
            새 글 작성
          </Link>
          <div style={{ width: "150px" }}>
            {hoverAction ? (
              <div
                className="action-profile"
                onClick={() => setHoverAciont(false)}
              >
                <div className="profile">
                  <img src={user.img} />
                  <div className="title">{user.name}</div>
                </div>
                <div className="container">
                  <div>
                    <Link to={`/mypage`} className="col-center row-center">
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
      </div>
    </div>
  );
};

export default Header;
