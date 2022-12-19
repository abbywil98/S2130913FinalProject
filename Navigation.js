import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" className="logo">Let's Eat!</Link>
          </li>
          <li>
            <Link to="/">Recipe</Link>
          </li>
          <li>
            <Link to="/mymenu">My Menu</Link>
          </li>
          <li>
            <Link to="/shoppinglist"> Shopping List</Link>
          </li>
          <li>
            <Link to="/nutritionalInfo"> Nutrition</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;  
