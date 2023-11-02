import React from "react";

const Button = ({ type, value, onClick }) => {
  if (type === "profile") {
    return (
      <div className="button profile__button" onClick={onClick}>
        {value}
      </div>
    );
  } else if (type === "setting") {
    return (
      <div className="button setting__button" onClick={onClick}>
        {value}
      </div>
    );
  } else if (type === "leave") {
    return (
      <div className="button leave__button" onClick={onClick}>
        {value}
      </div>
    );
  } else {
    return (
      <div className="button" onClick={onClick}>
        {value}
      </div>
    );
  }
};

export default Button;
