import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';



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
    console.log(id)
    const [post , setPost] = useState({
        title:'',
        ingredients:'',
        instructions:'',
        category_id:"",
        user_id:""
    })

    const handleChange = e =>{
         setPost({...post, [e.target.name]: e.target.value})
        }

    const submitForm = e => {
        e.preventDefault();
    } 
    
    //1609913190256
    

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
                 <label htmlFor = 'recipe'>Recipe</label>
                <textarea
                id = 'recipe'
                name='recipe'
                type='textarea'
                value={post.recipe}
                onChange = {handleChange}
                placeholder='Enter Recipe'
                />
                <input
                id = 'instructions'
                name='instructions'
                type='text'
                value={post.instructions}
                onChange = {handleChange}
                placeholder='Enter instructions'
                />
                <input
                id = 'ingredients'
                name='ingredients'
                type='text'
                value={post.ingredients}
                onChange = {handleChange}
                placeholder='Enter Recipe Name'
                />
                <Button type='submit' >Add</Button>
                <Button type='reset' >Cancel</Button>
            </RecipeForm>
        
        </div>
    )
}


export default Profile;

