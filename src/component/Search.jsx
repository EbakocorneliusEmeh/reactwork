import React from "react";


const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>


        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => {
            console.log("User is typing: ", e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
