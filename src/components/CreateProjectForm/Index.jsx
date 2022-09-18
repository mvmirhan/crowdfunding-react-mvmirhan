import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './CreateProjectForm.css'


const initialState = {
        title: "",
        description: "",
        goal: 0,
        image: "",
        is_open: true,
        date_created: ""       
    }

function CreateProjectForm() {

    const token = window.localStorage.getItem("token",)

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        const newState = {
            ...formData,
            [e.target.name]: e.target.value,
            }
            setFormData(() => newState)
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData().then((response) => {
            navigate("/project/:id")
        })    
    }

    const dateStr = formData.date_created
    
    const postData = async () => {
            const response = await
                fetch(`${process.env.REACT_APP_API_URL}projects/`,{
                    method: "post",
                    headers: {
                    "Content-type": "application/json",
                    Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({
                        title: formData.title,
                        description: formData.description,
                        goal: formData.goal,
                        image: formData.image,
                        is_open: formData.is_open,
                        date_created: new Date(dateStr).toISOString(),
                    }),
            });
            return response.json()
        } 
    
    return (    
    <form className='form'>
        <div>
            <label className='form_label' htmlFor='title'>Project Name: </label>
            <input className='form_input' name='title' type='text' placeholder='Add a project name'
            onChange={handleChange}/>
        </div>

     <div>
        <label className='form_label' htmlFor='description'>Project Description: </label>
        <input className='form_input' name='description' type='text' placeholder='Add project description'
        onChange={handleChange}/>
     </div>

    <div>
        <label className='form_label' htmlFor='goal'>Project Goal: </label>
        <input className='form_input' name='goal' type='integer' placeholder='Add a goal'
        onChange={handleChange}/>
    </div>

    <div>
        <label className='form_label' htmlFor='image'>Project Photo: </label>
        <input className='form_input' name='image' type='text' placeholder='Add an image URL'
        onChange={handleChange}/>
    </div>


    <div>
        <label className='form_label' htmlFor='date_created'>Date Created: </label>
        <input className='form_input' name='date_created' type='date'
        onChange={handleChange}/>
    </div>

    <div>
    <button className='btn' type='submit' onClick={handleSubmit}> Create New Project</button>
    </div>
    
    </form>
    )
}

export default CreateProjectForm