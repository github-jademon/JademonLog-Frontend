import React, { useState } from "react";

const RadioButton = () => {
  const [button, setButton] = useState(false);
  const onRadioButtonClick = () => {
    setButton(!button);
  };

  return (
    <div
      className={
        "setting__buttonRadio " + (button ? "setting__buttonRadio--click" : "")
      }
      onClick={() => onRadioButtonClick()}
    >
      <div className="setting__buttonRadio--circle"></div>
    </div>
  );
};

export default RadioButton;
