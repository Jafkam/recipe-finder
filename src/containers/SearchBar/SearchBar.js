import React, { Component } from "react";
import "./SearchBar.css";
import axios from "../../axios";

const SearchBar = ({ onChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search me"
        name="search"
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </>
  );
};

export default SearchBar;
