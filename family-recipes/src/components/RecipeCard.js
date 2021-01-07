import React from 'react'
import ViewDetails from './View'
import icon from '../../src/recipe-icon.svg'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
import '../homepage.css'

const RecipeCard = (props) => {
    console.log(props)
    return (
        <div className="recipe-container">
            <h1 style={{color:'white'}}>View Our Communities Recipes</h1>
            <div className="row_recipes">
                {props.data.map(recipe=>{
                    return <div className="recipe-card" key={recipe.id}>
                        <Card>
                            <CardImg top width="100%" src={icon} alt="Recipe Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">{recipe.title}</CardTitle>
                            {/* <CardSubtitle tag="h6" >Created by: {recipe.username}</CardSubtitle> */}
                            <ViewDetails className="view-button" data={recipe}>View Recipe</ViewDetails>
                            </CardBody>
                        </Card>
                        {/* <h2>{recipe.title}</h2> */}
                        {/* <img src="?"/> */}
                        {/* <ViewDetails data={recipe}>View Recipe</ViewDetails> */}
                        {/* <button className="recipe-button">View Recipe</button> */}
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecipeCard
