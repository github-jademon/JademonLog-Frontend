import React, { useRef, useState } from "react";
import "./Setting.css";
import { Button, Separator, SettingElement, SocialElement } from "components";
import axios from "axios";
import RadioElement from "components/setting/RadioElement";

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

const useInput = ({ prev, validator }) => {
  const [value, setValue] = useState(prev);

  const onChange = (e) => {
    const { value } = e.target;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return [value, onChange];
};

const Setting = () => {
  // const maxLen = (value) => value.length <= 10; // 상황에 따라 원하는 조건을 넣어준다
  // const { value, onChange } = useInput(maxLen);
  // const [describe, setDescribe] = useInput({
  //   prev: sampleData.describe,
  // });

  const [profileImg, setProifileImg] = useState(sampleData.img);
  const [social, setSocial] = useState(sampleData.social);
  const [describe, setDescribe] = useState(sampleData.describe);
  const [title, setTitle] = useState(sampleData.title);
  const [email, setEmail] = useState("");

  const uploadImg = (e) => {
    setPreviewImg(e);
    // axios.post('/', {
    //   img: "img"
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const setPreviewImg = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProifileImg(reader.result);
        // dispatch(triggerImageCropModal()); // 사진 업로드 하면 crop창 띄움
        e.target.value = "";
      };
    }
  };

  const clickInputFileImg = () => {
    document.getElementById("profileImg").click();
  };

  const deleteImg = () => {
    setProifileImg();
    // axios.delete('/')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const updateDescribe = () => {
    const body = {
      describe: describe,
    };
    // axios.post('/', body)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const updateTitle = () => {
    const body = {
      title: title,
    };
    // axios.post('/', body)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const updateSocial = () => {
    const body = {
      social: {
        email: social.email,
        github: social.github,
        twitter: social.twitter,
        facebook: social.facebook,
        homepage: social.homepage,
      },
    };
    // axios.post('/', body)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const updateEmail = () => {
    const body = {
      email: email,
    };
    setEmail("");
    // axios.post('/', body)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const deleteAccount = () => {
    // axios.delete('/')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });1
  };

  return (
    <div className="container setting__container">
      <div className="setting__element setting__profileElement">
        <div className="setting__profileImgElement">
          {profileImg ? (
            <img className="setting__profileImg" src={profileImg} />
          ) : (
            <img
              className="setting__profileImg"
              src={`${process.env.PUBLIC_URL}/404.png`}
            />
          )}
          <input
            className="setting-profileImgInput"
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={uploadImg}
          />
          <Button
            type="profile"
            name="이미지 업로드"
            onClick={clickInputFileImg}
          />
          <Button type="profile" name="이미지 제거" onClick={deleteImg} />
        </div>

        <Separator type="col" />
        <div>
          <div className="setting__profileName">{sampleData.name}</div>
          <div className="setting__profileDescibe">{describe}</div>
          <Button type="setting" name="수정" onClick={updateDescribe} />
        </div>
      </div>
      <SettingElement
        title="로그 제목"
        description="개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다."
        name="수정"
        type="button"
        onClick={updateTitle}
        prevValue={title}
      ></SettingElement>
      <Separator />
      <SettingElement
        title="소셜 정보"
        description="포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다."
        name="수정"
        type="social"
        prevValue={social}
        onClick={updateSocial}
      ></SettingElement>
      <Separator />
      <SettingElement
        title="이메일 주소"
        description="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
        name="변경"
        type="button"
        prevValue={email}
        onClick={updateEmail}
      >
        <div></div>
      </SettingElement>
      <Separator />
      <SettingElement title="이메일 수신 설정">
        <div className="setting__buttonRadioElements">
          <RadioElement name="댓글 알림" onClick={updateEmail} />
          <RadioElement name="로그 업데이트 소식" onClick={updateEmail} />
        </div>
      </SettingElement>
      <Separator />
      <SettingElement
        title="회원 탈퇴"
        description="탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다."
      >
        <Button type="leave" name="회원 탈퇴" onClick={deleteAccount} />
      </SettingElement>
    </div>
  );
};

export default Setting;
