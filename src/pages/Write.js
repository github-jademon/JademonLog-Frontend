import React, { useState } from "react";
import { Divider, Editor, Preview } from "../components";

const Write = () => {
  const [md, setMd] = useState("# Hello World");
  function onEditorChange(value) {
    setMd(value);
  }

  //https://blog.joostory.net/405

  // return (
  //   <div className="container">
  //     <div className="title">Write</div>
  //     <Editor value={desc} onChange={onEditorChange} />
  //   </div>
  // );

  return (
    <>
      <div className="container row-center">
        <div>
          <Editor onChange={onEditorChange} value={md} />
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="button">나가기</div>
          <div className="row-container">
            <div className="button">임시저장</div>
            <div className="button">출간하기</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
