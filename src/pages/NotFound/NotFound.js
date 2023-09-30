import React from "react";
import "./NotFound.css";

const NotFound = () => {
  const goHome = () => {
    window.location = "/";
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <div className="title">Page not found 404</div>
      <div style={{ margin: "20px auto 40px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/icon/icon-404.png`}
          width={420}
          className="notfound-icon"
        />
      </div>
      <div className="row-container">
        <div className="button" onClick={() => goHome()}>
          홈으로
        </div>
        <div className="button" onClick={() => goBack()}>
          뒤로가기
        </div>
      </div>
    </div>
  );
};

export default NotFound;
