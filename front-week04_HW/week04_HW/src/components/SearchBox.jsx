import React from "react";
import SearchIcon from "../assets/Search_icon.png";
import SearchRight from "../assets/SearchRight_icon.png";

const SearchBox = () => {
  return (
    <div>
      <input type="text" placeholder="Google 검색 또는 URL 입력" />
      <img src={SearchIcon} />
      <img src={SearchRight} />
    </div>
  );
};

export default SearchBox;
