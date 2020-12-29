import React, { useEffect, useState } from 'react'
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
    // const formData = { name: "", password: ""}
    const [ user , setUser] = useState({ name: "", password: ""});
    const [errors , setErrors] = useState({name: "", password: ""});
    const [disabled , setDisabled] = useState(true);
    
   
    const setFormErrors = (name , value) => {
        yup.reach(formSchema , name).validate(value)
            .then( () => setErrors({ ...errors , [name]: "" }))
            .catch( err => setErrors( {...errors , [name]: err.errors[0] } ))
    }
    
    const handleChange = event => {
        const { name, value} = event.target;
        
        setFormErrors(name , value);
        setUser({...user , [name]: value});
        
    }

      useEffect( () =>{
        formSchema.isValid(user)
        .then(valid => {setDisabled(!valid) })
    }, [user] )

    const submitForm  = (event) => {
        event.preventDefault();
         axios.post("https://reqres.in/api/users" , user)
            .then( res => {
                console.log("success" , res.data);
                setUser({ name: "", password: ""});
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
                    id="name"
                    name = "name"
                    type = "text"
                    placeholder = "Enter Username"
                    onChange = {handleChange}
                    />
                <p>{errors.password}</p>
                <label htmlFor = "password">Password</label>
                    <input
                    id="password"
                    name = "password"
                    type = "password"
                    onChange = {handleChange}
                    />
                <button disabled = {disabled} type = "submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
