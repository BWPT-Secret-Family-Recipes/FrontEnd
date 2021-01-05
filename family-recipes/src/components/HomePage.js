import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../homepage.css'
import RecipeSearchBar from './RecipeSearchBar'

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
        <div>
            <RecipeSearchBar data={recipes}/>
        </div>
    )
}

export default HomePage;
