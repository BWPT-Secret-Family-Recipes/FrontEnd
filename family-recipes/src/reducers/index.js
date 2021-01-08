import {IS_LOADING,DATA_FETCHED,FETCH_ERROR,POST_DATA} from '../actions/index'

const initialState = {
    recipes:[],
    isLoading:false,
    error:''
}


export const recipeReducer = (state=initialState, action) => {
    console.log('ol: index.js/reducers: reducer: state.action', state,action)
    switch(action.type){
        case IS_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case DATA_FETCHED:
            return {
                ...state,
                recipes:action.payload,
                isLoading:false
            }
        case FETCH_ERROR:
            return{
                ...state,
                isLoading:false,
                error:action.payload.message
            }
        case POST_DATA:
            return {
                ...state,
                isFetching:false,
                recipes:action.payload,
                error:''
            }
        default:
            return state
    }
}