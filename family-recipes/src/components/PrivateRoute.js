import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component,...props}) => {
    return <Route {...props} render={()=>{
      //logic for checking if we have an auth token
      //localStorage.setItem('token','bogusToken')
      if (localStorage.getItem('token')){
        return <Component />
      }
      return <Redirect to="/sign-in"/>
    }}/>
  }
  
  export default PrivateRoute;