import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';



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

    useEffect(()=>{
        axiosWithAuth().get(`https://ptbw191-secretfamilyrecipes.herokuapp.com/api/users/${id}/recipes`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

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
        
        </div>
    )
}


export default Profile;

