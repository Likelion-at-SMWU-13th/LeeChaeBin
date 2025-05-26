import React from "react";
import Plus from "../assets/plus_icon.png";
import styled from "styled-components";

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 14px;
  margin-top: 4px;
  text-align: center;
`;

const Shortcut6 = () => {
  const isImportant = false;

  return (
    <div>
      <Icon src={Plus} />
      <Text>
        {isImportant ? <strong>바로가기 추가</strong> : "바로가기 추가"}
      </Text>
    </div>
  );
};

export default Shortcut6;
