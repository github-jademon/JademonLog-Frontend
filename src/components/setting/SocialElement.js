import React from "react";

const SocialElement = ({ name, value }) => {
  if (value) {
    return (
      <div>
        <span className="setting__linkTitle">{name}</span>
        <span>{value}</span>
      </div>
    );
  }
};

export default SocialElement;
