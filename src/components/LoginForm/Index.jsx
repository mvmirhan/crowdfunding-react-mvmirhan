import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './LoginForm.css'

const LoginForm = ({setLoggedInUser}) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value})
        }
        
    const postData = async () => {
        const response = await fetch
        (`${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: 
                {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(credentials),
            })
            return response.json()
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(credentials.username && credentials.password) {
            postData().then((data) => {
            console.log(data)
                window.localStorage.setItem("token", data.token,)
                // setLoggedInUser({id: data.id})
                navigate("/")
            })}
    }
    
    return (
    <form className='form'>
        <div className='form_body'>
            <div>
                <label className='form_label' htmlFor='username'>Username:</label>
                <input className='form_input' type='text' name='username' placeholder='Enter username'
                onChange={handleChange}/>
            </div>

            <div>
                <label className='form_label' htmlFor='password'>Password:</label>
                <input className='form_input' type='password' name='password' placeholder='Enter password'
                onChange={handleChange}/>
            </div>
            <div>
                <button className='btn' type='submit' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </form>
)
}

export default LoginForm
