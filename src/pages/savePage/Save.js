import React, { useState } from "react";
import "./Save.css";
import { Button } from "components";

const sampleData = {
  img: `${process.env.PUBLIC_URL}/404.png`,
};

const Save = () => {
  const [change, setChange] = useState(true);
  const func = () => {
    setChange(!change);
    if (change === false) {
      // onClick();
    }
  };
  return (
    <div className="container container--768">
      <div className="title saveTitle">임시 글 목록</div>
      <div className="savePosts">
        <div className="savePost">
          <div className="post-title">제목</div>
          <div className="post-desc">내용 간략히</div>
          <div>
            <div className="post-date">2023년 11월 09일</div>
            <Button type="underscore" name={"삭제"} onClick={func} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
