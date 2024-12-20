import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";
import { Button, Separator } from "components";

const sampleData = {
  img: `${process.env.PUBLIC_URL}/404.png`,
  descript: "요약글",
  title: "Title",
};

const Upload = () => {
  let nav = useNavigate();
  const [profileImg, setProfileImg] = useState(sampleData.img);
  const [descript, setDescript] = useState(sampleData.descript);
  const [count, setCount] = useState(sampleData.descript.length);
  const [title, setTitle] = useState(sampleData.title);
  const [urlTitle, setUrlTitle] = useState(sampleData.title);

  function cancle() {
    nav(-1);
  }

  function upload() {
    //nav('/');
    alert('업로드하였습니다.')
  }

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
        setProfileImg(reader.result);
        // dispatch(triggerImageCropModal()); // 사진 업로드 하면 crop창 띄움
        e.target.value = "";
      };
    }
  };

  const clickInputFileImg = () => {
    document.getElementById("profileImg").click();
  };

  const deleteImg = () => {
    setProfileImg();
    // axios.delete('/')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const changeDescript = (e) => {
    let text = e.target.value;
    if (text.length > 150) {
      return;
    } else {
      setCount(text.length);
      setDescript(text);
    }
  };

  return (
    <div className="container container--768 upload__container">
      <div className="upload__elements">
        <div className="upload__element">
          <div className="title upload__title">포스트 미리보기</div>
          <div className="upload__thumbnail">
            <div className="upload__thumbnailImgElement">
              {profileImg ? (
                <img className="upload__thumbnailImg" src={profileImg} />
              ) : (
                <img
                  className="upload__thumbnailImg"
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
            </div>
            <div className="upload__buttonCotainer">
              <Button
                type="upload"
                name="썸네일 업로드"
                onClick={clickInputFileImg}
              />
              <Button type="upload" name="썸네일 제거" onClick={deleteImg} />
            </div>
          </div>
        </div>
        <div className="upload__element upload__previewElement">
          <div className="title upload__title upload__previewTitle">제목</div>
          <div
            className={
              "upload__count " + (count === 150 && "upload__count--red")
            }
          >
            {count}/150
          </div>
          <textarea
            className="upload__descript"
            placeholder="당신의 포스트를 짧게 소개해보세요."
            value={descript}
            onChange={changeDescript}
          ></textarea>
        </div>
      </div>
      <Separator type="row" />
      <div className="upload__elements">
        <div className="upload__element">
          <div className="title upload__title">공개설정</div>
          <div className="upload__radioButtonContainer">
            <div className="upload__radioButtonElement">
              <input
                type="radio"
                id="public"
                name="disclosure"
                className="upload__radioButton"
              />
              <label htmlFor="public" className="upload__radioLabel button">
                전체공개
              </label>
            </div>
            <div className="upload__radioButtonElement">
              <input
                type="radio"
                id="private"
                name="disclosure"
                className="upload__radioButton"
              />
              <label htmlFor="private" className="upload__radioLabel button">
                비공개
              </label>
            </div>
          </div>
        </div>
        <div className="upload__element">
          <div className="title upload__title">URL설정</div>
          <div className="upload__urlContainer">
            <div className="upload__urlUsername">/@jademon/</div>
            <input
              className="upload__urlInput"
              value={urlTitle}
              onChange={(e) => setUrlTitle(e.target.value)}
            />
          </div>
        </div>
        {/* <div>
              <div>시리즈 설정</div>
              <div>시리즈에 추가하기</div>
            </div> */}
      </div>
      <div className="uploadBar__container">
        <div className="button upload__button" onClick={cancle}>취소</div>
        <div className="button upload__button" onClick={upload}>
          출간하기
        </div>
      </div>
    </div>
  );
};

export default Upload;
