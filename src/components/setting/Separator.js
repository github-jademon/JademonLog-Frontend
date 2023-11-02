import React from "react";

const Separator = ({ type }) => {
  if (type === "col") {
    return <div className="setting__profile--separator"></div>;
  } else {
    return <div className="setting__element--separator"></div>;
  }
};

export default Separator;
