import React, { useState } from "react";

const Button = ({ type, name, onClick }) => {
  const [button, setButton] = useState(false);
  if (type === "radio") {
    const onRadioButtonClick = () => {
      setButton(!button);
      onClick();
    };

    return (
      <div
        className={
          "setting__buttonRadio " +
          (button ? "setting__buttonRadio--click" : "")
        }
        onClick={onRadioButtonClick}
      >
        <div className="setting__buttonRadio--circle"></div>
      </div>
    );
  } else if (type === "profile") {
    return (
      <div className="button profile__button" onClick={onClick}>
        {name}
      </div>
    );
  } else if (type === "underscore") {
    return (
      <div className="button underscore__button" onClick={onClick}>
        {name}
      </div>
    );
  } else if (type === "leave") {
    return (
      <div className="button leave__button" onClick={onClick}>
        {name}
      </div>
    );
  } else {
    return (
      <div className="button" onClick={onClick}>
        {name}
      </div>
    );
  }
};

export default Button;
