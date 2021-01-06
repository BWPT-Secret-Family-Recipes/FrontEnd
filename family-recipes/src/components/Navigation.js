import React from 'react'
import {Navbar,Nav,NavLink} from 'reactstrap'
import styled from "styled-components";
import logo from "../family-recipes_logo.svg";

const Img = styled.img`
width: 10%;
height: auto;

`

const Navstyle = {
    padding: '1rem auto',
    margin: '1rem auto',


}
const Navigation = () => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    return (
        <Navbar style={Navstyle}>
            <Img src = {logo} alt = "secret family recipes logo"></Img>
            <Nav>
                <NavLink style={{color:'white'}}href="/">Home</NavLink>
                <NavLink style={{color:'white'}} href="/sign-in">Sign-In</NavLink>
                <NavLink style={{color:'white'}} href="/register">Register</NavLink>
                <NavLink style={{color:'white'}} href="/login" onClick={logout}>Log-Out</NavLink>
                <NavLink style={{color:'white'}} href="/my-profile">my-profile</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Navigation
