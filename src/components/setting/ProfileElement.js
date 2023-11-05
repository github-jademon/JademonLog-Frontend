import React, { useState } from "react";

const ProfileElement = ({ prevValue, type }) => {
  const [value, setValue] = useState(prevValue);
  console.log(value);
  if (type === "name") {
    return <div className="setting__profileName">{value}</div>;
  } else if (type === "describe") {
    return <div className="setting__profileDescribe">{value}</div>;
  } else {
    return (
      <div className="setting__socialElement">
        <input
          className="setting__subElement setting__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }
};

export default ProfileElement;
