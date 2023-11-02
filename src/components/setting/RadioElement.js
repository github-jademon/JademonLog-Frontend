import React from "react";
import { Button } from "components";

const RadioElement = ({ name, onClick }) => {
  return (
    <div className="setting__buttonRadioElement">
      <div className="setting__buttonName">{name}</div>
      <Button type="radio" onClick={onClick} />
    </div>
  );
};

export default RadioElement;
