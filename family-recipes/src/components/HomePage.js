import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../homepage.css'
import RecipeSearchBar from './RecipeSearchBar'

const HomePage = () => {
    
    const [recipes,setRecipes] = useState([])
    
    useEffect( ()=>{ 
        const fetchRecipes = async() => {
            const recipesHome = await axios.get(`https://ptbw191-secretfamilyrecipes.herokuapp.com/`)
            .then(res=>{
                setRecipes(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchRecipes()
    },[recipes])

    return (
        <div>
            <RecipeSearchBar data={recipes}/>
        </div>
    )
}

export default HomePage;
