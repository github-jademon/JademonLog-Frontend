import React from "react";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  return (
    <Link to={`/post/${data.id}`} className="post">
      <div className="post-img">
        <img src={data.img} />
      </div>
      <div className="post-main">
        <div className="title col-center">{data.title}</div>
        <div className="desc">{data.desc}</div>
        <div className="row-container post-bottom">
          <div>{data.date}</div>
          <div>·</div>
          <div>{data.commentsCount}개의 댓글</div>
        </div>
      </div>
      <div className="row-container post-bottom">
        <div className="writer row-container">
          <img src={data.writer.img} />
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
