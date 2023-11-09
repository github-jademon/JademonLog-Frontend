import React, { useEffect, useState } from "react";
import { Button, ProfileElement, SocialElement } from "components";

const SettingElement = ({
  title,
  children,
  description,
  onClick,
  name,
  prevValue,
  type,
}) => {
  const [windowWidth, setWindowWidth] = useState();
  const [change, setChange] = useState(true);
  const [value, setValue] = useState(prevValue);
  const func = () => {
    setChange(!change);
    if (change === false) {
      onClick();
    }
  };
  useEffect(() => {
    function resize() {
      setWindowWidth(
        window.matchMedia("screen and (min-width: 768px)").matches
      );
    }
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("resize", resize);
    };
  }, []);

  if (type === "profile") {
    return (
      <>
        {windowWidth ? (
          <div className="setting__subElement">
            {change ? (
              <>
                <ProfileElement prevValue={value.name} type="name" />
                <ProfileElement prevValue={value.describe} type="describe" />
              </>
            ) : (
              <>
                <ProfileElement prevValue={value.name} />
                <ProfileElement prevValue={value.describe} />
              </>
            )}
            <Button type="underscore" name={name} onClick={func} />
          </div>
        ) : (
          <div className="setting__element setting__element--col">
            <div className="setting__element setting__element--phone">
              {change ? (
                <>
                  <div className="setting__title">{value.name}</div>
                  <div className="setting__element setting__element--between">
                    <div className="setting__element setting__element--between">
                      <div className="setting__subElement">
                        {value.describe}
                      </div>
                      <Button type="underscore" name={name} onClick={func} />
                    </div>
                  </div>
                </>
              ) : (
                <div className="setting__element setting__element--between">
                  <div className="setting__subElement">
                    <ProfileElement prevValue={value.name} />
                    <ProfileElement prevValue={value.describe} />
                  </div>
                  <Button type="underscore" name={name} onClick={func} />
                </div>
              )}
            </div>
            {description ? (
              <div className="setting__description">{description}</div>
            ) : null}
          </div>
        )}
      </>
    );
  } else if (type === "profile1") {
    return (
      <div className="setting__element setting__element--col">
        <div
          className={
            "setting__element " + (windowWidth ? "" : "setting__element--phone")
          }
        >
          {change ? (
            <div>
              <div className="setting__title">{value.name}</div>
              <div className="setting__element setting__element--between">
                <div className="setting__element setting__element--between">
                  <div className="setting__subElement">{value.describe}</div>
                  <Button type="underscore" name={name} onClick={func} />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="setting__element setting__element--between">
                <div className="setting__element setting__element--col setting__subElement">
                  <ProfileElement prevValue={value.name} />
                  <ProfileElement prevValue={value.describe} />
                </div>
                <Button type="underscore" name={name} onClick={func} />
              </div>
            </div>
          )}
        </div>
        {description ? (
          <div className="setting__description">{description}</div>
        ) : null}
      </div>
    );
  } else if (type === "button") {
    return (
      <div className="setting__element setting__element--col">
        <div
          className={
            "setting__element " + (windowWidth ? "" : "setting__element--phone")
          }
        >
          <div className="setting__title">{title}</div>
          <div className="setting__element setting__element--between">
            <div className="setting__element setting__element--between">
              {change ? (
                <div className="setting__subElement">{value}</div>
              ) : (
                <div className="setting__subElement">
                  <input
                    className="setting__input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              )}
              <Button type="underscore" name={name} onClick={func} />
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
        <div
          className={
            "setting__element " + (windowWidth ? "" : "setting__element--phone")
          }
        >
          <div className="setting__title">{title}</div>
          <div className="setting__element setting__element--between">
            <div className="setting__element setting__element--between">
              {change ? (
                <div className="setting__subElement">
                  <SocialElement name="이메일" prevValue={value.email} />
                  <SocialElement name="깃허브" prevValue={value.github} />
                  <SocialElement name="트위터" prevValue={value.twitter} />
                  <SocialElement name="페이스북" prevValue={value.facebook} />
                  <SocialElement name="홈페이지" prevValue={value.homepage} />
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
              <Button type="underscore" name={name} onClick={func} />
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
        <div
          className={
            "setting__element " + (windowWidth ? "" : "setting__element--phone")
          }
        >
          <div className="setting__title">{title}</div>
          <div className="setting__element setting__element--between">
            <div className="setting__element setting__element--width setting__element--between">
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
