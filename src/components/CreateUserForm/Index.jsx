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

    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault();

        const newState = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newState)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        postData().then((response) => {
            navigate("/login");
            })       
    }

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}users/`, {
                method: "post",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(formData),
            })
            console.log(formData)
            return response.json()
    }



    return (        
        <div className='form'>
             <div className='form-body'>
            <div>
                <label className='form_label' htmlFor='username'>Username</label>
                <input className='form_input' name='username' type='text' placeholder='Username' onChange={handleChange}/>
            </div>

            <div>
            <label className='form_label' htmlFor='email'>Email</label>
            <input className='form_input' name='email' type='email' placeholder='Email' onChange={handleChange}/>
            </div>

            <div>
            <label className='form_label' htmlFor='password'>Password</label>
            <input className='form_input' name='password' type='password' placeholder='Password' onChange={handleChange}/>
            </div>

            <div>
                <button className='btn' type='submit' onClick={handleSubmit}>Create Account</button>
            </div>
            </div>
        </div>
    )
}

export default CreateUserForm