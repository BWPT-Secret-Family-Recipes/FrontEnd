import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory, useHIstory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Must be valid username")
        .min(3 , "Username must be at least three letters"),
    
    password: yup
        .string()
        .required("Must be valid password")
        .min(5, "Password Must be at least 5 characters")
})


const SignIn = () => {
    const [ user , setUser] = useState({ username: "", password: ""});
    const [errors , setErrors] = useState({username: "", password: ""});
    const [disabled , setDisabled] = useState(true);

    const history = useHistory();
    
   
    const setFormErrors = (name , value) => {
        yup.reach(formSchema , name).validate(value)
            .then( () => setErrors({ ...errors , [name]: "" }))
            .catch( err => setErrors( {...errors , [name]: err.errors[0] } ))
    }
    
    const handleChange = e => {
        e.persist();
        setUser({...user,[e.target.name]:e.target.value})
    }


    const submitForm  = (event) => {
        event.preventDefault();
         axiosWithAuth().post("https://ptbw191-secretfamilyrecipes.herokuapp.com/api/auth/login" , user)
            .then( res => {
                console.log("success" , res.data);
                localStorage.setItem('token',res.data.payload)
                setUser({username:'',password:''})
                history.push('/my-profile')
            })
            
            .catch(err => console.log(err, "submission failed"))
    }
   

    return (
        <div>
            <h1>Signing in</h1>
            <form onSubmit = {submitForm}>
                <p>{errors.name}</p>
                <label htmlFor = "username">Username</label>
                    <input
                    id="username"
                    name = "username"
                    type = "text"
                    placeholder = "Enter Username"
                    onChange = {handleChange}
                    value= {user.username}
                    />
                <p>{errors.password}</p>
                <label htmlFor = "password">Password</label>
                    <input
                    id="password"
                    name = "password"
                    type = "password"
                    onChange = {handleChange}
                    value={user.password}
                    />
                <button type = "submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
