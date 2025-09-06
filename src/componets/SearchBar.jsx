import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search jobs, companies..."
        className="search-bar"
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
