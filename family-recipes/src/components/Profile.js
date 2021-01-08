import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addRecipe,userRecipes} from '../actions/index'
import RecipeModal from './RecipeModal';
import icon from '../../src/recipe-icon.svg'
import {
    Card, CardImg, CardBody,
    CardTitle, Button 
  } from 'reactstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const RecipeForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin: 3rem auto;
    color: #fff;
    padding:0.5rem;
    border-radius: 0.5rem;

   
`
const Input = styled.input`
  height: 2rem;
  margin: 0.5rem 0;

`

const initialRecipe = {
    title:'',
    ingredients:'',
    instructions:'',
    category_id:''
}


const Profile = (props) => {
    const {id} = useParams();
    const [post , setPost] = useState({
        title:'',
        ingredients:'',
        instructions:'',
        category_id:'',
        user_id: id,
    })

    const [userRecipes,setUserRecipes] = useState([])

    const [recipes,setRecipes]= useState(props.recipes)

    const[recipeToEdit,setRecipeToEdit]= useState(initialRecipe)

    // useEffect( ()=>{ 
    //     const fetchRecipes = async() => {
    //         const recipes = await axiosWithAuth().get(`https://ptbw191-secretfamilyrecipes.herokuapp.com/api/users/${id}/recipes`)
    //         .then(res=>{
    //             setRecipes(res.data)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    //     }
    //     fetchRecipes()
    // },[recipes])

    useEffect(()=>{
        const fetchRecipes = async () => {
            const recipes = props.userRecipes(id)
        }
        fetchRecipes()
    },[recipes])

    const handleChange = e =>{
         e.persist();
         setPost({...post, [e.target.name]: e.target.value})
        }

    const submitForm = e => {
        e.preventDefault();
        // axios.post('https://ptbw191-secretfamilyrecipes.herokuapp.com/api/recipe',post)
        // .then(res => {
        //     console.log('You have created the recipe: ',res)
        //     setUserRecipes(...userRecipes,post)
        // })
        // .catch(err => {
        //     console.log('You were unable to create the receipe because: ', err.response)
        // })
        props.addRecipe(post)
    } 
    
    //1609913190256

    const deleteRecipe = (recipe) => {
        // /api/recipe/:id
        axiosWithAuth().delete(`https://ptbw191-secretfamilyrecipes.herokuapp.com/api/recipe/${recipe.id}`)
        .then(res=>{
            console.log(res)
            setRecipes(props.recipes.filter(recipe=>{
                if(recipe.id !== recipeToEdit.id){
                    return recipe
                }
            }))
            
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
  

    return (
        <div>
            <h2 style = {{color: 'white'}}>Write Your Own Recipes</h2>
            <RecipeForm onSubmit = {submitForm}>
                <Input type="text" name="title" value={post.title} placeholder="Enter Title" onChange={handleChange}/>
                <Input type="text" name="ingredients" value={post.ingredients} placeholder="Enter Ingredients" onChange={handleChange}/>
                <Input type="text" name="instructions" value={post.instructions} placeholder="Enter Instructions" onChange={handleChange}/>
                <Input type="number" name="category_id" value={post.category_id}  onChange={handleChange}/>
                <Button color = "light" type='submit' >Add</Button>
            </RecipeForm>

            <div className="recipe-container">
            <h1 style={{color:'white'}}>View Your Recipes</h1>
            <div className="row_recipes">
                {props.recipes.map(recipe=>{
                    return <div className="recipe-card" key={recipe.id}>
                        <Card>
                            <CardImg top width="100%" src={icon} alt="Recipe Card image cap" />
                            <CardBody style = {{width: '100%'}}>
                            <CardTitle tag="h5">{recipe.title}</CardTitle>
                            <RecipeModal data={recipe}>Edit Recipe</RecipeModal>
                        <Button color = "light" className="recipe-button" onClick={e=>{
                            e.stopPropagation();
                            deleteRecipe(recipe)
                        }}>Delete Recipe</Button>

                            </CardBody>
                        </Card>
                       


                    </div>
                })}
            </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        recipes:state.recipes,
        isLoading:state.isLoading,
        error:state.error
    }
}

export default connect(mapStateToProps,{userRecipes,addRecipe})(Profile)



