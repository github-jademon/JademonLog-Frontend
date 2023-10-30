import React from "react";

const SettingElement = ({ title, children, description }) => {
  return (
    <div className="setting__element setting__element--col">
      <div className="setting__element">
        <div className="setting__title">{title}</div>
        <div className="setting__element setting__element--between">
          {children}
        </div>
      </div>
      {description ? (
        <div className="setting__description">{description}</div>
      ) : null}
    </div>
  );
};

export default SettingElement;
