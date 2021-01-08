import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../homepage.css'
import {loadRecipes} from '../actions/index'
import {connect} from 'react-redux'
import RecipeSearchBar from './RecipeSearchBar'

const HomePage = (props) => {
    console.log(props)
    // useEffect( ()=>{ 
    //     const fetchRecipes = async() => {
    //         const recipesHome = await axios.get(`https://ptbw191-secretfamilyrecipes.herokuapp.com/`)
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
            const recipes = props.loadRecipes()
        }
        fetchRecipes()
    },[props.recipes])

    return (
        <div>
            <RecipeSearchBar data = {props.recipes}/>
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

export default connect(mapStateToProps,{loadRecipes})(HomePage)

