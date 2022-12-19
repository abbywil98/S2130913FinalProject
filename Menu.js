import React from 'react';


const Menu = ({food}) => {
    return (
        <div className="recipe-card">
            <div className="recipe-card-info">
                <p className="recipe-title">{food.title}</p>
                <p className="recipe-desc">{food.description}</p>
                <p className="recipe-ingred">{food.ingredients}</p>
                <button> Add to Menu</button>
            </div>
        </div>
        
    );
};
export default Menu;