import React from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor = ({ value, onChange }) => {
  console.log(value);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MDEditor height={600} value={value} onChange={onChange} />
    </div>
  );
};

export default Editor;
