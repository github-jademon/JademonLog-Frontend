import React from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor = ({ value, onChange }) => {
  console.log(value);
  return <MDEditor height={600} value={value} onChange={onChange} />;
};

export default Editor;
