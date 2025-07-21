import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  //Authorization code로 토큰을 발급받는 단계입니다.

  const [params] = useSearchParams();

  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();
  //Authorization code를 추출합니다.

  useEffect(() => {
    //REST_API_KEY, REDIRECT_URI, Authorization code값을 쿼리파라미터에 실어서 access token을 요청합니다.
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST", //POST 방식으로 요청

        headers: {
          "Content-Type": "application/x-www-form-urlencoded", //URL 인코딩 형식으로 전송
        },
      }
    ).then((res) => {
      //요청에 대한 응답 처리 부분
      const data = res.json(); //응답을 json 객체로 바꿔줍니다.
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token); //로컬스토리지에 access token을 저장합니다.
        navigate("/greeting"); //토큰 저장 후 greeting 페이지로 이동합니다.
      });
    });
  }, [authCode, grant_type, navigate]);
  return <div>Redirection Page: 카카오 로그인 중...</div>;
};

export default Redirection;
