import React from "react";
import MDEditor from "@uiw/react-md-editor";

const Editor = ({ value, onChange }) => {
  console.log(value);
  return (
    <div>
      <MDEditor
        height={600}
        value={value}
        onChange={onChange}
        textareaProps={{
          placeholder: "당신의 이야기를 적어보세요...",
        }}
      />
    </div>
  );
};

export default Editor;
