import React, { useEffect } from "react";
import "./Main.css";
import { Post } from "components";

const sampledata = [
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
  {
    id: "1",
    img: `${process.env.PUBLIC_URL}/404.png`,
    title: "hi",
    desc: "hihihihi",
    date: "2023년 09월 02일",
    commentsCount: 1,
    writer: {
      img: `${process.env.PUBLIC_URL}/404.png`,
      name: "hello",
    },
    likesCount: 2,
  },
];

const Main = () => {
  useEffect(() => {
    const app = document.querySelector(".app-container");
    const handleScroll = (e) => {
      const scrollTop = app.scrollTop;
      console.log(app.scrollTop);
      console.log("ddd");
      let header = document.querySelector(".header");
      console.log(header);
      if (scrollTop <= 25) {
        header.classList.remove("header--scroll");
      } else {
        header.classList.add("header--scroll");
      }
    };
    app.addEventListener("scroll", handleScroll);
    return () => {
      app.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  return (
    <div className="container">
      <div className="posts">
        {sampledata.map((v, i) => {
          return <Post data={v} key={i}></Post>;
        })}
      </div>
    </div>
  );
};

export default Main;
