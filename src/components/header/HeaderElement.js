import React from "react";
import { Link } from "react-router-dom";

const HeaderElement = ({ name, onClick, type }) => {
  if (type === "func") {
    return (
      <div className="header__element" onClick={onClick}>
        {name}
      </div>
    );
  } else {
    return (
      <div className="header__element">
        <Link to={onClick} className="header__link">
          {name}
        </Link>
      </div>
    );
  }
};

export default HeaderElement;
