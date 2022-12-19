import React, { useState } from "react";
import Item from "./Item";
import FetchNutrition from "./FetchNutrition";


import { recipes } from "../data/data1";

const DisplayItems = () => {
  const [searchField, setSearchField] = useState("banana");

  const handleClick = (e) => {
    setSearchField(e.target.innerHTML);
    console.log(searchField);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu">
            <h2>Menu</h2>
            <ul class="navbar-nav">
            { recipes.map((food) => { 
                return (
                  <li key={food.id} class="nav-item" onClick={handleClick}>
                    <Item item={food} />
                  </li>
                )
              })}
             
            </ul>
          </div>
          <div className="col-6">
            <FetchNutrition query={searchField} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default DisplayItems;
