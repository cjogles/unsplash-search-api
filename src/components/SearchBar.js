import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
`;

const SearchBarDiv = styled.div`
  padding: 1rem;
`;

function SearchBar(props) {
  const onInputChange = e => {
    props.setSearch(e.target.value);
    console.log(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    props.onSearchSubmit();
    console.log(props.search);
    console.log(e.target.value);
  };

  return (
    <Nav>
      <form
        // upon form submission, make sure page does not reload, and invoke onSearchSubmit
        // with users input value as the query
        style={{ display: "flex" }}
        onSubmit={e => onFormSubmit(e)}
      >
        <SearchBarDiv>
          <input
            className="searchBar"
            type="search"
            value={props.search}
            onChange={e => onInputChange(e)}
          />
        </SearchBarDiv>
        <SubmitButton>
          <input
            className="submitButton"
            type="submit"
            value="Search"
            style={{
              borderStyle: "dashed",
              borderRadius: "5px",
              borderColor: "black",
              height: "1.9rem"
            }}
          />
        </SubmitButton>
      </form>
    </Nav>
  );
}

export default SearchBar;
