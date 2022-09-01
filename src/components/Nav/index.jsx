import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    const location = useLocation()
    const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
    const logOut = () => {
        window.localStorage.removeItem("token");
            setLoggedIn(false)
    }


    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [window.localStorage, location]
    )
    
    return (
        <nav id='navbar'>
                <Link to="/">Home</Link>
                <Link to="/users/">Create Account</Link>

                {loggedIn ? (
                <Link to = "/" onClick={logOut}>Logout</Link>) 
                :(<Link to = "/login">Login</Link>)}

                {loggedIn ? (
                <Link to = "/projects/">Create Project</Link>) 
                :null}
        </nav>
    );
}


export default Nav;
