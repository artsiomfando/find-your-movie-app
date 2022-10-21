import React from 'react';

const SearchBar = () => (
  <div className="searchBar">
    <form className="searchBar__form">
      <input type="text" placeholder="What do you want to watch" />
      <button type="submit" className="button">Search</button>
    </form>
  </div>
);

export default SearchBar;
