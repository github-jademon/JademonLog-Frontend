import React from "react";
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
