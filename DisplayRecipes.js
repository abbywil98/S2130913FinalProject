import React from 'react';
import RecipeItem from './RecipeItem';



const DisplayRecipies = ({foodList }) => {
    return (
        <div className="recipes-container">
                {foodList.map((food, index) => (
                    <RecipeItem food={food} key={index} />
                ))}
            </div>
    );
};
export default DisplayRecipies;