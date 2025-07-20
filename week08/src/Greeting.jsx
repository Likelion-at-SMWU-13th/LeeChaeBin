import React, { useEffect, useState } from "react";

//Access Token을 사용하여 사용자 정보를 요청하는 단계입니다.
const Greeting = () => {
  //이름과 프로필 이미지를 상태값으로 하여 useState로 관리합니다.
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    //로컬 스토리지에서 access token을 가져옵니다.
    const accessToken = localStorage.getItem("accessToken");

    //가져온 토큰으로 카카오 사용자 정보 api에서 사용자 정보를 요청합니다.
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      //요청에 대한 응답처리 부분
      const userData = res.json();
      //응답을 json 객체로 변환합니다.
      userData.then((user) => {
        setName(user.properties.nickname); //이름 설정
        setProfileImg(user.properties.profile_image); //프로필 이미지 설정
      });
    });
  }, []);

  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
