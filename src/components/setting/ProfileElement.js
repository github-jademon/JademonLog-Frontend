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
      <input
        className=" setting__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export default ProfileElement;
