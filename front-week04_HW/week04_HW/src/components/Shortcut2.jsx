import React from "react";
import Youtube from "../assets/youtube_icon.png";
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

const Shortcut2 = () => {
  const isImportant = false;

  return (
    <div>
      <Icon src={Youtube} />
      <Text>{isImportant ? <strong>Youtube</strong> : "Youtube"}</Text>
    </div>
  );
};

export default Shortcut2;
