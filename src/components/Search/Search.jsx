import React, { useState } from "react";
import "./Search.scss";

const Search = ({ setSearchText }) => {
  // const [inputText, setInputText] = useState("");

  const onChangeHandler = e => {
    // setInputText(e.target.value);
    setSearchText(e.target.value);
  };
  // console.log(inputText);

  return (
    <div className="Search">
      <form>
        <img src="img/icons/searchIcon.png" alt="search" />
        <input
          type="text"
          placeholder="search"
          // value={inputText}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
