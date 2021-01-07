import axios from 'axios';
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import styled from 'styled-components';
import RecipeSearchBar from './RecipeSearchBar';
=======
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import RecipeModal from './RecipeModal';
>>>>>>> f722275b9cd6436e8f49cd1741b2bd8203583cdc


const RecipeForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 3rem auto;
    color: #fff;
    border: 0.2rem solid  #FFD24E;
    padding:0.5rem;
    border-radius: 0.5rem;

   
`
const Button = styled.button`
    margin: 0.5rem;
    box-shadow: none;
    color: #2a8fd8;
    font-size: 1.2rem;
    background-color:#FFD24E;
    &:hover {
        background-color:  #065B97;
    color:white;
    border: 0.2rem solid white;
    }

`

const initialRecipe = {
    title:'',
    ingredients:'',
    instructions:'',
    category_id:''
}


const Profile = () => {
    const {id} = useParams();
    const [post , setPost] = useState({
        title:'',
        ingredients:'',
        instructions:'',
        category_id:'',
        user_id: id,
    })

    const [userRecipes,setUserRecipes] = useState([])

    const [recipes,setRecipes]= useState([])

    const[recipeToEdit,setRecipeToEdit]= useState(initialRecipe)

    useEffect( ()=>{ 
        const fetchRecipes = async() => {
            const recipes = await axiosWithAuth().get(`https://ptbw191-secretfamilyrecipes.herokuapp.com/api/users/${id}/recipes`)
            .then(res=>{
                setRecipes(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchRecipes()
    },[recipes])

    const handleChange = e =>{
         e.persist();
         setPost({...post, [e.target.name]: e.target.value})
        }

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth().post('https://ptbw191-secretfamilyrecipes.herokuapp.com/api/recipe',post)
        .then(res => {
            console.log('You have created the recipe: ',res)
            setUserRecipes(...userRecipes,post)
        })
        .catch(err => {
            console.log('You were unable to create the receipe because: ', err.response)
        })
    } 
    
    //1609913190256

    const deleteRecipe = (recipe) => {
        // /api/recipe/:id
        axiosWithAuth().delete(`https://ptbw191-secretfamilyrecipes.herokuapp.com/api/recipe/${recipe.id}`)
        .then(res=>{
            setRecipes(recipes.filter(recipe=>{
                if(recipe.id !== recipeToEdit.id){
                    return recipe
                }
            }))
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
   } 
   
   

<<<<<<< HEAD
   return (
      
       
       <div>
           <h2>Write Your Own Recipes</h2>
           <RecipeForm onSubmit = {submitForm}>
               <label htmlFor = 'title'>Title</label>
               <input
               id = 'title'
               name='title'
               type='text'
               value={post.title}
               onChange = {handleChange}
               placeholder='Enter Recipe Name'
               />
                <label htmlFor = 'ingredients'>Ingredients</label>
               <input
               id = 'ingredients'
               name='ingredients'
               type='text'
               value={post.ingredients}
               onChange = {handleChange}
               placeholder='Enter ingredients'
               />
                <label htmlFor = 'instructions'>instructions</label>
               <textarea
               id = 'instructions'
               name='instructions'
               type='text'
               value={post.instructions}
               onChange = {handleChange}
               placeholder='Enter instructions'
               />
               <Button type='submit' >Add</Button>
               <Button type='reset' >Cancel</Button>
           </RecipeForm>
       
       </div>
       
   )
=======
    return (
        <div>
            <h2>Write Your Own Recipes</h2>
            <RecipeForm onSubmit = {submitForm}>
                <input type="text" name="title" value={post.title} onChange={handleChange}/>
                <input type="text" name="ingredients" value={post.ingredients} onChange={handleChange}/>
                <input type="text" name="instructions" value={post.instructions} onChange={handleChange}/>
                <input type="number" name="category_id" value={post.category_id} onChange={handleChange}/>
                <Button type='submit' >Add</Button>
                <Button type='reset' >Cancel</Button>
            </RecipeForm>

            <div className="recipe-container">
            <h1 style={{color:'white'}}>View Your Recipes</h1>
            <div className="row_recipes">
                {recipes.map(recipe=>{
                    return <div className="recipe-card" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <RecipeModal data={recipe}>Edit Recipe</RecipeModal>
                        <button className="recipe-button" onClick={e=>{
                            e.stopPropagation();
                            deleteRecipe(recipe)
                        }}>Delete Recipe</button>
                    </div>
                })}
            </div>
            </div>
        </div>
    )
>>>>>>> f722275b9cd6436e8f49cd1741b2bd8203583cdc
}

   




export default Profile;



