import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../style/form-fields.css'

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,[id]: value,
        }))
    }

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,{
                method: "post",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(credentials),
            })
            return response.json()
    }
    
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token)
                history("/")
            })}
    }
    
    return (
    <form className='form-style'>
            <div>
                <label className='form-label' htmlFor='username'>Username:</label>
                <input className='form-input'
                    type='text'
                    id='username'
                    placeholder='Enter username'
                    onChange={handleChange}
                />
            </div>

            <div>
            <label className='form-label' htmlFor='password'>Password:</label>
            <input className='form-input'
                type='password'
                id='password'
                placeholder='Enter password'
                onChange={handleChange} 
            />
            </div>
            <button className='form-button' type='submit' onClick={handleSubmit}>Login</button>
    </form>
)
}

export default LoginForm
