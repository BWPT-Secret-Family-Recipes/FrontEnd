import React from 'react'
import {Navbar,Nav,NavLink} from 'reactstrap'

const Navigation = () => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    return (
        <Navbar color='dark'>
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
