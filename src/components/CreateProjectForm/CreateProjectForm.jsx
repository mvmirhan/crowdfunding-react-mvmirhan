import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
    const [data, inputData] = useState({
        title: "",
        description: "",
        goal: "",
        image: ""        
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        inputData((prevData) => ({
            ...prevData,[id]: value,
        }))
    }

    const postData = async () => {
        const response = await
            fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,{
                method: "post",
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(data),
            })
            return response.json()
    }

    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        {postData().then((response) => {
                window.localStorage.setItem("token", response.token)
                history("/")
            })}
    }

    return (    
    <form>
    <div>
        <label>Project Name</label>
        <input
            type='text'
            placeholder='Add a project name'
            onChange={handleChange}
        />
    </div>

    <div>
        <label>Project Description</label>
        <input
            type='text'
            placeholder='Add project description'
            onChange={handleChange}
        />
    </div>

    <div>
        <label>Project Goal</label>
        <input
            type='text'
            placeholder='Add a goal'
            onChange={handleChange}
        />
    </div>

    <div>
        <label>Project Photo</label>
        <input
            type='text'
            placeholder='Add an image URL '
            onChange={handleChange}
        />
    </div>


    <button type='submit' onClick={handleSubmit}> Create New Project</button>
    </form>
    )
}

export default ProjectForm