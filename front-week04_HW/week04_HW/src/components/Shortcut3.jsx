import React from "react";
import Portal from "../assets/portal_icon.png";
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

const Shortcut3 = () => {
  const isImportant = false;

  return (
    <div>
      <Icon src={Portal} />
      <Text>{isImportant ? <strong>숙명포털</strong> : "숙명포털"}</Text>
    </div>
  );
};

export default Shortcut3;
