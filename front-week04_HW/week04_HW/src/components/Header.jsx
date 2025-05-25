import React from "react";
import profileImg from "../assets/profile_icon.png";
import SearchLab from "../assets/SearchLab_icon.png";
import Apps from "../assets/Apps_icon.png";

const Header = () => {
  return (
    <div>
      <span>Gmail</span>
      <span>이미지</span>
      <img src={SearchLab} />
      <img src={Apps} />
      <img src={profileImg} />
    </div>
  );
};

export default Header;
