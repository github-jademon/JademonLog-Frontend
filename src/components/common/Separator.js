import React from "react";

const Separator = ({ type }) => {
  if (type === "col") {
    return <div className="separator--col"></div>;
  } else {
    return <div className="separator"></div>;
  }
};

export default Separator;
