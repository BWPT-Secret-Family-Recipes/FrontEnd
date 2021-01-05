import React from 'react'
import '../homepage.css'

const RecipeCard = (props) => {
    console.log(props)
    return (
        <div className="recipe-container">
            <h1 style={{color:'white'}}>View Our Communities Recipes</h1>
            <div className="row_recipes">
                {props.data.map(recipe=>{
                    return <div className="recipe-card" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <button className="recipe-button">View Recipe</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecipeCard
