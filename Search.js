import React, { useState } from "react";
import DisplayRecipies from "./DisplayRecipes";

function Search({ details }) {
   const [searchField, setSearchField] = useState("");

  const filtered = details.filter((entry) => {
    return entry.title.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <DisplayRecipies foodList={filtered} />
      </div>
  
  );
}
export default Search;
