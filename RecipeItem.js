import React from 'react'
//import Accordion from 'react-bootstrap/Accordion';
import Stars from "./stars"


const RecipeItem = ({food}) => {
    return (
        <div className="recipe-card">
            <div className="recipe-card-info">
                <p className="recipe-title">{food.title}</p>
                <p className="recipe-desc">{food.description}</p>
                <p className="recipe-ingred">{food.ingredients}</p>
                <p className="recipe-ingred">{food.instructions}</p>
                <button> Add to Menu </button>
                
                <div className="component"><Stars /></div> 
            </div>
        </div>
        
    );
};
export default RecipeItem;


