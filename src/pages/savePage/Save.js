import React, { useState } from "react";
import "./Save.css";
import { Button } from "components";
import { Link } from "react-router-dom";

const sampleData = [
  {
    id: 1,
    title: "제목",
    desc: "내용 간략히",
    date: "2023년 11월 09일",
  },
  {
    id: 2,
    title: "제목",
    desc: "내용 간략히",
    date: "2023년 11월 09일",
  },
  {
    id: 3,
    title: "제목",
    desc: "내용 간략히",
    date: "2023년 11월 09일",
  },
  {
    id: 4,
    title: "제목",
    desc: "내용 간략히",
    date: "2023년 11월 09일",
  },
  {
    id: 5,
    title: "제목",
    desc: "내용 간략히",
    date: "2023년 11월 09일",
  },
];

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
      <div className="title save__title">임시 글 목록</div>
      <div className="save__posts">
        {sampleData.map((v, i) => (
          <div className="save__post" key={i}>
            <Link to={`/write/${v.id}`}>
              <div className="save__postTitle">{v.title}</div>
              <div className="save__desc">{v.desc}</div>
              <div className="save__bottom">
                <div className="save__date">{v.date}</div>
                <Button type="underscore" name={"삭제"} onClick={func} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Save;
