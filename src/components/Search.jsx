import React, { useState } from "react";

const Search = (props) => {
  const [title,setTitle]=useState("")
  return (
    <div>
      <input
      onChange={(e)=>setTitle(e.target.value)}
        type="text"
        className="search"
        placeholder="Search for..."
        defaultValue=""
      />
      <button onClick={()=>{
        props.search(title)}} className="btn btn-secondary searchButton" type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
