import React, { useState } from "react";
import "./Upload.css";
import { Button } from "components";

const sampleData = {
  img: `${process.env.PUBLIC_URL}/404.png`,
};

const Upload = () => {
  const [profileImg, setProfileImg] = useState(sampleData.img);

  function cancle() {
    window.location.href = "/";
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

  return (
    <div className="container">
      <div>
        <div>
          <div>포스트 미리보기</div>
          <div>
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
            <div>썸네일 업로드</div>
          </div>
        </div>
        <div>
          <div>제목</div>
          <div>요약글</div>
        </div>
      </div>
      <div>
        <div>
          <div>공개설정</div>
          <div>
            <div>전체 공개</div>
            <div>비공개</div>
          </div>
        </div>
        <div>
          <div>URL설정</div>
          <input placeholder="/@jademon/fff" />
        </div>
      </div>
      {/* <div>
        <div>시리즈 설정</div>
        <div>시리즈에 추가하기</div>
      </div> */}
    </div>
  );
};

export default Upload;
