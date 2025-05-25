import React from "react";
import Github from "../assets/github_icon.png";
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

const Shortcut4 = () => {
  const isImportant = true;

  return (
    <div>
      <Icon src={Github} />
      <Text>{isImportant ? <strong>Github</strong> : "Github"}</Text>
    </div>
  );
};

export default Shortcut4;
