import React from "react";
import "./Setting.css";
import { RadioButton, SettingElement, SocialElement } from "components";

const sampleData = {
  img: `${process.env.PUBLIC_URL}/404.png`,
  name: "hello",
  describe: "&nbsp;",
  title: "jademon.log",
  social: {
    email: "j2python@gmail.com",
    github: "github-jademon",
    twitter: null,
    facebook: null,
    homepage:
      "https://jademon.notion.site/jademon/145a728e77bd4e649ff54eca31689e6e",
  },
};

const Setting = () => {
  return (
    <div className="container setting__container">
      <div className="setting__element setting__profileElement">
        <div className="setting__profileImgElement">
          <img className="setting__profileImg" src={sampleData.img} />
          <div className="button profile__button">이미지 업로드</div>
          <div className="button profile__button">이미지 제거</div>
        </div>
        <div className="setting__profile--separator"></div>
        <div>
          <div className="setting__profileName">{sampleData.name}</div>
          <div className="setting__profileDescibe">{sampleData.describe}</div>
          <div className="button setting__button">수정</div>
        </div>
      </div>
      <SettingElement
        title="로그 제목"
        description="개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다."
      >
        <div className="setting__element setting__element--between">
          <div>{sampleData.title}</div>
          <div className="button setting__button">수정</div>
        </div>
      </SettingElement>
      <div className="setting__element--separator"></div>
      <SettingElement
        title="소셜 정보"
        description="포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다."
      >
        <div className="setting__element setting__element--between">
          <div>
            <SocialElement name="이메일" value={sampleData.social.email} />
            <SocialElement name="깃허브" value={sampleData.social.github} />
            <SocialElement name="트위터" value={sampleData.social.twitter} />
            <SocialElement name="페이스북" value={sampleData.social.facebook} />
            <SocialElement name="홈페이지" value={sampleData.social.homepage} />
          </div>
          <div className="button setting__button">수정</div>
        </div>
      </SettingElement>
      <div className="setting__element--separator"></div>
      <SettingElement
        title="이메일 주소"
        description="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
      >
        <div className="setting__element setting__element--between">
          <div></div>
          <div className="button setting__button">변경</div>
        </div>
      </SettingElement>
      <div className="setting__element--separator"></div>
      <div className="setting__element setting__element--col">
        <div className="setting__element">
          <div className="setting__title">이메일 수신 설정</div>
          <div className="setting__buttonRadioElements">
            <div className="setting__buttonRadioElement">
              <div className="setting__buttonName">댓글 알림</div>
              <RadioButton />
            </div>
            <div className="setting__buttonRadioElement">
              <div className="setting__buttonName">로그 업데이트 소식</div>
              <RadioButton />
            </div>
          </div>
        </div>
      </div>
      <div className="setting__element--separator"></div>
      <div className="setting__element setting__element--col">
        <div className="setting__element">
          <div className="setting__title">회원 탈퇴</div>
          <div className="button leave__button">회원 탈퇴</div>
        </div>
        <div className="setting__description">
          탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
        </div>
      </div>
    </div>
  );
};

export default Setting;
