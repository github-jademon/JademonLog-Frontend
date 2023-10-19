import React, { useState } from "react";
import { Editor } from "../../components";
import "./Write.css";

const Write = () => {
  const [md, setMd] = useState("# Hello World");
  function onEditorChange(value) {
    setMd(value);
  }

  return (
    <>
      <div className="container write__container">
        <Editor onChange={onEditorChange} value={md} />
      </div>
      <div className="writeBar">
        <div className="writeBar__container">
          <div className="button writeBar__button">나가기</div>
          <div className="row-container">
            <div className="button writeBar__button">임시저장</div>
            <div className="button writeBar__button">출간하기</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
