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
                <Link  className='a-nav' to="/">Home</Link>
                <Link  className='a-nav' to="/users/">Create Account</Link>

                {loggedIn ? (
                <Link  className='a-nav' to = "/" onClick={logOut}>Logout</Link>) 
                :(<Link  className='a-nav' to = "/login">Login</Link>)}

                {loggedIn ? (
                <Link className='a-nav'  to = "/projects/">Create Project</Link>) 
                :null}
        </nav>
    );
}


export default Nav;
