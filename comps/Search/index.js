import React from "react";
import styled from "styled-components";

const SearchCont = styled.div`
height: 30px;
width: 100%;
display: flex;
align-items: center;
position: relative;
`;

const SearchInput = styled.input`
height: 100%;
width: 100%;
position: relative;
align-items: center;
display: flex;
border: 1px solid lightgrey;
background: url("./search.svg");
background-repeat: no-repeat;
background-position:right 10px center;
background-size: 20px;
padding: 0 10px;
`;

const SearchImg = styled.img`
width: 25px;
position: absolute;
right: 10px;

`;

const Search = () => {
  return (
    <SearchCont>
      <SearchInput type="text" placeholder=" Search CommAid..." name="search" />  
    </SearchCont>
  );
};

export default Search;