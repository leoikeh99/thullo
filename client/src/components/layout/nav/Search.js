import React from "react";
import { SearchCover, SearchBtn, SearchInput } from "../../styles/NavStyles";

const Search = () => {
  return (
    <SearchCover>
      <SearchInput placeholder="Keyword..." />
      <SearchBtn>Search</SearchBtn>
    </SearchCover>
  );
};

export default Search;
