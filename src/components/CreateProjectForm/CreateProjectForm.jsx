import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../style/form-fields.css'

function CreateProjectForm() {
    const [data, inputData] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: "true",
        date_created: ""       
    })

    // const handleChange = (e) => {
    //     const { id, value } = e.target;
    //     inputData((prevData) => ({
    //         ...prevData,[id]: value,
    //     }))
    // }

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}projects/`,{
                method: "post",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(data),
            })
            return response.json()
    }

    const history = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault(); {
    //         postData().then((response) => {
    //             window.localStorage.setItem("token", response.token)
    //             history("/")
    //         })}
    // }


    return (    
    <form className='form-style'>
    <div>
        <label className='form-label'>Project Name: </label>
        <input className='form-input'
            type='text'
            placeholder='Add a project name'
            // onChange={handleChange}
        />
    </div>

    <div>
        <label className='form-label'>Project Description: </label>
        <input id='form-inpur-desc'
            type='text'
            placeholder='Add project description'
            // onChange={handleChange}
        />
    </div>

    <div>
        <label className='form-label'>Project Goal: </label>
        <input className='form-input'
            type='text'
            placeholder='Add a goal'
            // onChange={handleChange}
        />
    </div>

    <div>
        <label className='form-label'>Project Photo: </label>
        <input className='form-input'
            type='text'
            placeholder='Add an image URL'
            // onChange={handleChange}
        />
    </div>

    <div>
        <label className='form-label'>Project Status: </label>
        <input className='form-input'
            type='text'
            placeholder='Type True'
            // onChange={handleChange}
        />
    </div>

    <div>
        <label className='form-label'>Date Created: </label>
        <input className='form-input'
            type='datetime-local'
            // placeholder='Select Date Time '
            // onChange={handleChange}
        />
    </div>

    <button className='form-button' type='submit' onClick={postData}> Create New Project</button>
    </form>
    )
}

export default CreateProjectForm