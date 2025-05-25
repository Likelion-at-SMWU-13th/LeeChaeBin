import React from "react";
import SearchIcon from "../assets/Search_icon.png";
import SearchRight from "../assets/SearchRight_icon.png";
import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 700px;
  height: 45px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  padding: 0 14px;
`;

const Input = styled.input`
flex: 1;
border: none;
font-size: 16px;
outline: none;
background; none;
`;

const LeftIcon = styled.img`
  margin-right: 10px;
`;

const SearchBox = () => {
  return (
    <InputBox>
      <LeftIcon src={SearchIcon} />
      <Input type="text" placeholder="Google 검색 또는 URL 입력" />

      <img src={SearchRight} />
    </InputBox>
  );
};

export default SearchBox;
