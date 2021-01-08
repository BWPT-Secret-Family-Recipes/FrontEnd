import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const IS_LOADING = "IS_LOADING"

export const DATA_FETCHED = "DATA_FETCHED"

export const FETCH_ERROR = "FETCH_ERROR"

export const POST_DATA = "POST DATA"

const apiURL = "https://ptbw191-secretfamilyrecipes.herokuapp.com/"

export const loadRecipes = () => (dispatch) => {
    console.log('ol : index.js actions: dispatch', dispatch)

    dispatch({
        type:IS_LOADING
    })

    axios.get(apiURL)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:DATA_FETCHED,payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({
            type:FETCH_ERROR,
            payload:`err fetching data: ${err.message}`
        })
    })
}

export const userRecipes = (id) => (dispatch) => {
    dispatch({
        type:IS_LOADING
    })

    axiosWithAuth().get(`${apiURL}api/users/${id}/recipes`)
    .then(res=>{
        dispatch({type:DATA_FETCHED,payload:res.data})
    })
    .catch((err)=>{
        dispatch({
            type:FETCH_ERROR,
            payload:err.message
        })
    })
}

export const addRecipe = (recipe) => (dispatch) => {
    axiosWithAuth().post(`${apiURL}api/recipe`,recipe)
    .then((res)=> dispatch({type:POST_DATA, payload:res.data}))
    .catch((err)=> dispatch({
        type:FETCH_ERROR,
        payload:`error fetching data: ${err.message}`
    }))
}
