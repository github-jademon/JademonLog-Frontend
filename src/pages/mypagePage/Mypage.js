import React, { useState } from "react";
import "./Mypage.css";
import { Button, ProfileElement, Separator } from "components";
import { Link } from "react-router-dom";

const sampleData = {
  img: `${process.env.PUBLIC_URL}/404.png`,
  profile: {
    name: "hello",
    describe: "&nbsp;",
  },
  title: "jademon.log",
  social: {
    email: "j2python@gmail.com",
    github: "github-jademon",
    twitter: null,
    facebook: "profile.php?id=100024107148034",
    homepage:
      "https://jademon.notion.site/jademon/145a728e77bd4e649ff54eca31689e6e",
  },
  post: [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/404.png`,
      title: "제목",
      desc: "소개",
      date: "2023년 11월 09일",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/404.png`,
      title: "제목",
      desc: "소개",
      date: "2023년 11월 09일",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/404.png`,
      title: "제목",
      desc: "소개",
      date: "2023년 11월 09일",
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/404.png`,
      title: "제목",
      desc: "소개",
      date: "2023년 11월 09일",
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/404.png`,
      title: "제목",
      desc: "소개",
      date: "2023년 11월 09일",
    },
  ],
};

const Mypage = () => {
  const [data, setData] = useState(sampleData);
  const [change, setChange] = useState(true);
  const func = () => {
    setChange(!change);
    if (change === false) {
      // onClick();
    }
  };
  return (
    <div className="container container--768 mypage__container">
      <div className="mypage__profileBox">
        <div className="mypage__profile">
          <img className="mypage__profileImg" src={data.img} />
          <div className="mypage__profileDetail">
            <div className="mypage__profileName">{data.profile.name}</div>
            <div className="mypage__profileDescribe">
              {data.profile.describe}
            </div>
          </div>
        </div>
        <Separator type="row" />
        <div className="mypage__links">
          {data.social.email && (
            <a href={`mailto:${data.social.email}`} className="mypage__link">
              이메일
            </a>
          )}

          {data.social.github && (
            <a
              href={`https://github.com/${data.social.github}`}
              className="mypage__link"
            >
              깃허브
            </a>
          )}
          {data.social.twitter && (
            <a
              href={`https://twitter.com/${data.social.twitter}`}
              className="mypage__link"
            >
              트위터
            </a>
          )}
          {data.social.facebook && (
            <a
              href={`https://facebook.com/${data.social.facebook}`}
              className="mypage__link"
            >
              페이스북
            </a>
          )}
          {data.social.homepage && (
            <a href={data.social.homepage} className="mypage__link">
              홈페이지
            </a>
          )}
        </div>
      </div>
      <div className="mypage__separator"></div>
      <div className="mypage__posts">
        <div className="mypage__title">글</div>
        <Separator type="row" />
        {sampleData.post.map((v, i) => (
          <div className="mypage__post" key={i}>
            <Link to={`/write/${v.id}`}>
              <div className="mypage__imgBox">
                <img className="mypage__img" src={v.img} />
              </div>
              <div className="mypage__postTitle">{v.title}</div>
              <div className="mypage__desc">{v.desc}</div>
              <div className="mypage__date">{v.date}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypage;
