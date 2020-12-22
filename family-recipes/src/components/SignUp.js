import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';

//https://ptbw191-secretfamilyrecipes.herokuapp.com/

const Container = styled.div`
  text-align: center;
  border:2px solid red;
  margin-top:3%;
  width:100%;
`

const FormContainer = styled.div`
width:90%;
border:2px solid blue;
`

const SignUp = () => {

    const [userInfo,setUserInfo] = useState({
        username:'',
        email:'',
        password:''
    })

    const [err, setErr] = useState('')

    const handleChanges = (e) => {
        setUserInfo({
            ...userInfo,[e.target.name]:e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        axios.post("https://ptbw191-secretfamilyrecipes.herokuapp.com/api/auth/register",userInfo)
        .then(res => {
            console.log('ol: SignUp.js: register call', res)
        })
        .catch(err => {
            console.log('ol: SignUp.js err response', err.response)
        })
    }

    return (
        <Container>
            <h1>Welcome To Family Recipes, Sign Up Below</h1>
            <FormContainer>
                <h2>Register Here</h2>
                <form onSubmit={register}>
                    User Name:<input type="text" name="username" value={userInfo.username} onChange={handleChanges} ></input><br/>
                    User Email:<input type="text" name="email" value={userInfo.email} onChange={handleChanges}></input><br/>
                    PassWord: <input type="text" name="password" value={userInfo.password} onChange={handleChanges}></input><br/>
                    <br/>
                    <button>Sign-Up Now!</button>
                </form>
            </FormContainer>
        </Container>
    )
}

export default SignUp;