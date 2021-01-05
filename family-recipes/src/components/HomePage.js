import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../homepage.css'

const HomePage = () => {
    
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        axios.get("https://ptbw191-secretfamilyrecipes.herokuapp.com/")
        .then(res=>{
            console.log("ol: homepage.js: axios get recipes", res.data)
            setRecipes(res.data)
        })
        .catch(err => {
            console.log("error message:",err.response)
        })
    },[])
    return (
        <div className="recipe-container">
            <h1 style={{color:'white'}}>View Our Communities Recipes</h1>
            <div className="row_recipes">
                {recipes.map(recipe=>{
                    return <div className="recipe-card" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <button className="recipe-button">View Recipe</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HomePage;
