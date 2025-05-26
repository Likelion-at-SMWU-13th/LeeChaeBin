import React from "react";
import ChatGPT from "../assets/chatGPT_icon.png";
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

const Shortcut5 = () => {
  const isImportant = true;

  return (
    <div>
      <Icon src={ChatGPT} />
      <Text>{isImportant ? <strong>ChatGPT</strong> : "ChatGPT"}</Text>
    </div>
  );
};

export default Shortcut5;
