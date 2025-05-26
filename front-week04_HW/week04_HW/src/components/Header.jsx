import React from "react";
import profileImg from "../assets/profile_icon.png";
import SearchLab from "../assets/SearchLab_icon.png";
import Apps from "../assets/Apps_icon.png";
import styled from "styled-components";

const Card = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  margin-top: 6px;
  padding: 8px 16px;
`;

const Text = styled.span`
  font-size: 13px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Card>
      <Text>Gmail</Text>
      <Text>이미지</Text>
      <Icon src={SearchLab} />
      <Icon src={Apps} />
      <Profile src={profileImg} />
    </Card>
  );
};

export default Header;
