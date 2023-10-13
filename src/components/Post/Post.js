import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ data }) => {
  return (
    <Link to={`/post/${data.id}`} className="post">
      <div className="post__imgBox">
        <img className="post__img" src={data.img} />
      </div>
      <div className="post__content">
        <div className="title post__title">{data.title}</div>
        <div className="post__desc">{data.desc}</div>
        <div className="post__subInfo">
          <div className="post__element">{data.date}</div>
          <div className="post__element">·</div>
          <div className="post__element">{data.commentsCount}개의 댓글</div>
        </div>
      </div>
      <div className="post__footer">
        <div className="post__writer row-container">
          <img className="post__writerImg" src={data.writer.img} />
          <div>
            by <strong>{data.writer.name}</strong>
          </div>
        </div>
        <div>
          <strong>❤︎</strong> {data.likesCount}
        </div>
      </div>
    </Link>
  );
};

export default Post;
