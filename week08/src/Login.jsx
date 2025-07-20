import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

const Login = () => {
  //Authorization code를 발급받는 단계입니다.
  //카카오 인증 서버로 이동하도록 합니다.
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;
  //카카오 인증 서버를 호출하면서 response_type, client_id, redirect_uri 3가지 쿼리 파라미터를 같이 보냅니다.

  const handleKakao = () => {
    window.location.href = authServerLink;
  };
  //위에서 만든 URL로 이동할 수 있게 하는 함수입니다.

  return (
    <div className="login-box">
      <h1>로그인</h1>
      <div className="btn-container">
        <button onClick={handleKakao}>
          <img src={KakaoImg} alt="카카오 로그인" />
        </button>
        <button>
          <img src={GoogleImg} alt="구글 로그인" />
        </button>
      </div>
    </div>
  );
};

export default Login;
