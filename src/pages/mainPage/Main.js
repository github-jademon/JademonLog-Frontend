import React, { useEffect } from "react";
import "./Main.css";
import { Post } from "components";
import { db, firestore } from "../../firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

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
  console.log(firestore);
  const movie = firestore.collection("movie");
  // movie
  //   .doc("movie_item")
  //   .get()
  //   .then((doc) => {
  //     console.log(doc.data());
  //   });

  // addDoc(collection(db, "movie"), {
  //   first: "Ada",
  //   last: "Lovelace",
  //   born: 1815,
  //   test: 123123123,
  // });
  useEffect(async () => {
    // db 뒤에 "techInfo"는 정보를 가져올 컬렉션 이름이다.
    const query = await getDocs(collection(db, "movie"));
    query.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
    console.log(query);
  }, []);
  return (
    <div className="container mainContainer">
      <div className="posts">
        {sampledata.map((v, i) => {
          return <Post data={v} key={i}></Post>;
        })}
      </div>
    </div>
  );
};

export default Main;
