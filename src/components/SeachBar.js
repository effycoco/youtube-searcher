import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.defaultSearch);
  const handleInput = (event) => {
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearchBarSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={handleInput} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
