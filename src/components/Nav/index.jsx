import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
    return (
        <nav id='navbar'>
            <Link to="/">  Home  </Link>
            <Link to="/createproject"> Create Project </Link>
            <Link to="/login"> Login </Link>
        </nav>
    )
}

export default Nav