import React from 'react'
import {Navbar,Nav,NavLink} from 'reactstrap'
import styled from "styled-components";
import logo from "../family-recipes_logo.svg";

const Img = styled.img`
width: 10%;
height: auto;

`
const Navigation = () => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    return (
        <Navbar color='dark'>
            <Img src = {logo} alt = "secret family recipes logo"></Img>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/sign-in">Sign-In</NavLink>
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/login" onClick={logout}>Log-Out</NavLink>
                <NavLink href="/my-profile">my-profile</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Navigation
