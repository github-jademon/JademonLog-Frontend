import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "../../components";
import "./Write.css";

const Write = () => {
  let nav = useNavigate();

  const [title, setTitle] = useState();
  const [md, setMd] = useState("# Hello World");
  function onEditorChange(value) {
    setMd(value);
  }

  function cancle() {
    // window.location.href = "/";
    nav('/');
  }

  function upload() {
    // window.location.href = "/upload";
    nav('/upload');
  }

  return (
    <>
      <div className="container write__container">
        <input
          className="write__input"
          value={title}
          onChange={(e) => setTitle(e.value)}
          placeholder={"제목을 입력하세요"}
        />
        <Editor onChange={onEditorChange} value={md} />
      </div>
      <div className="writeBar">
        <div className="writeBar__container">
          <div className="button writeBar__button" onClick={cancle}>
            나가기
          </div>
          <div className="row-container">
            <div className="button writeBar__button">임시저장</div>
            <div className="button writeBar__button" onClick={upload}>
              출간하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
