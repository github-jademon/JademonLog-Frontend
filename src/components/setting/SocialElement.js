import React, { useState } from "react";

const SocialElement = ({ name, prevValue, type }) => {
  const [value, setValue] = useState(prevValue);
  if (type === "input") {
    return (
      <div className="setting__socialElement">
        <span className="setting__linkTitle">{name}</span>
        <input
          className="setting__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }
  if (value) {
    return (
      <div className="setting__socialElement">
        <span className="setting__linkTitle">{name}</span>
        <span className="setting__linkText">{value}</span>
      </div>
    );
  }
};

export default SocialElement;
