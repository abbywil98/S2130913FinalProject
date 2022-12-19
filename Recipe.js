import React from "react";
import Search from "./Search";
import { recipes } from "../data/data1";
import "bootstrap/dist/css/bootstrap.min.css";


function Recipe() {
    return (
        <div className="container">
            <Search details={recipes}/>
        </div>
    );
};
export default Recipe;