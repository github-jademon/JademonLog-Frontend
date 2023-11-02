import React, { useState } from "react";
import { Button, SocialElement } from "components";

const SettingElement = ({
  title,
  children,
  description,
  onClick,
  name,
  prevValue,
  type,
}) => {
  const [change, setChange] = useState(true);
  const [value, setValue] = useState(prevValue);
  const func = () => {
    setChange(!change);
    onClick();
  };
  if (type === "button") {
    return (
      <div className="setting__element setting__element--col">
        <div className="setting__element">
          <div className="setting__title">{title}</div>
          <div className="setting__element setting__element--between">
            <div className="setting__element setting__element--between">
              {change ? (
                <div className="setting__subElement">{value}</div>
              ) : (
                <input
                  className="setting__subElement setting__input"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              )}
              <Button type="setting" name={name} onClick={func} />
            </div>
          </div>
        </div>
        {description ? (
          <div className="setting__description">{description}</div>
        ) : null}
      </div>
    );
  } else if (type === "social") {
    return (
      <div className="setting__element setting__element--col">
        <div className="setting__element">
          <div className="setting__title">{title}</div>
          <div className="setting__element setting__element--between">
            <div className="setting__element setting__element--between">
              {change ? (
                <div className="setting__subElement">
                  <SocialElement name="이메일" value={value.email} />
                  <SocialElement name="깃허브" value={value.github} />
                  <SocialElement name="트위터" value={value.twitter} />
                  <SocialElement name="페이스북" value={value.facebook} />
                  <SocialElement name="홈페이지" value={value.homepage} />
                </div>
              ) : (
                <div className="setting__subElement">
                  <SocialElement
                    type="input"
                    name="이메일"
                    prevValue={value.email}
                  />
                  <SocialElement
                    type="input"
                    name="깃허브"
                    prevValue={value.github}
                  />
                  <SocialElement
                    type="input"
                    name="트위터"
                    prevValue={value.twitter}
                  />
                  <SocialElement
                    type="input"
                    name="페이스북"
                    prevValue={value.facebook}
                  />
                  <SocialElement
                    type="input"
                    name="홈페이지"
                    prevValue={value.homepage}
                  />
                </div>
              )}
              <Button type="setting" name={name} onClick={func} />
            </div>
          </div>
        </div>
        {description ? (
          <div className="setting__description">{description}</div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="setting__element setting__element--col">
        <div className="setting__element">
          <div className="setting__title">{title}</div>
          <div className="setting__element setting__element--between">
            <div className="setting__element setting__element--between">
              {children}
            </div>
          </div>
        </div>
        {description ? (
          <div className="setting__description">{description}</div>
        ) : null}
      </div>
    );
  }
};

export default SettingElement;
