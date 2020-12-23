import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Must be valid username")
        .min(3 , "Username must be at least three letters"),
    
    password: yup
        .string()
        .required("Must be valid password")
        .min(6 , "Password Must be at least 6 characters")
})


const SignIn = () => {
    const formData = { name: "", password: ""}
    const [ user , setUser] = useState(formData);
    const [err , setErr] = useState(formData);
   
    const setFormErrors = (name , value) => {
        yup.reach(formSchema , name).validate(value)
            .then( () => setErr({ ...err , [name]: "" }))
            .catch( e => setErr( {...err , [name]: e.err } ))
    }
    
    const handleChange = event => {
        const { name, value} = event.target;
        setFormErrors(name , value);
        setUser({...user , [name] : value});
        
    }


    const submitForm  = (event) => {
        event.preventDefault();
         axios.post("https://reqres.in/api/users" , user)
            .then( res => {
                console.log("success" , res.data);
                setUser(formData);
            })
            
            .catch(err => console.log(err, "submission failed"))
            console.log(user);
    }
   

    return (
        <div>
            <h1>Signing in</h1>
            <form onSubmit = {submitForm}>
                <label htmlFor = "username">Username</label>
                    <input
                    id="name"
                    name = "name"
                    type = "text"
                    placeholder = "Enter Username"
                    onChange = {handleChange}
                    />

                <label htmlFor = "password">Password</label>
                    <input
                    id="password"
                    name = "password"
                    type = "password"
                    onChange = {handleChange}
                    />
                <button type = "submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
