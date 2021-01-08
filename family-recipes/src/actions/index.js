import axios from 'axios';

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
