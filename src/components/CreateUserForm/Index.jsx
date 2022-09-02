import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CreateUserForm.css'

const initialState = {
    username: "",
    email: "",
    password: "",
}

function CreateUserForm() {

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const newState = {
            ...formData,
            [e.target.name]: <e className="target value"></e>
        }
        setFormData(newState)
    }

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}users/`, {
                method: "post",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(formData),
            })
            return response.json()
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); {
            postData().then((response) => {
                navigate("/");
            })}
    }

    return (        
        <div className='form'>
             <div className='form-body'>
            <div>
                <label className='form_label' htmlFor='username'>Username</label>
                <input className='form_input' type='text' placeholder='Username'
                onChange={handleChange}/>
            </div>

            <div>
            <label className='form_label' htmlFor='email'>Email</label>
            <input className='form_input' type='text' placeholder='Email'
            onChange={handleChange}/>
            </div>

            <div>
            <label className='form_label' htmlFor='password'>Password</label>
            <input className='form_input' type='text' placeholder='Password'
            onChange={handleChange}/>
            </div>

            <div>
                <button className='btn' type='submit' onClick={handleSubmit}>Create Account</button>
            </div>
            </div>
        </div>
    )
}

export default CreateUserForm