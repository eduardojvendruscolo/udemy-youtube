import React, { useState } from "react";
import { InputSearchCustom } from "../styled-comps/InputSearchCustom";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState();

  const onInputChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    //TODO: Make sure we call callback from parent component
    onTermSubmit(term);
  };

  return (
    <div className=" search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label> Video Search</label>
          <InputSearchCustom
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
