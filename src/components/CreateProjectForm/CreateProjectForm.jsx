import React, { useState } from "react";

function ProjectForm() {
    const [data, postData] = useState({
        title: "",
        description: "",
        goal: "",
        image: ""        
    })

    return (    
    <form>
    <div>
        <label>Project Name</label>
        <input
            type='text'
            placeholder='Add a project name'
        />
    </div>

    <div>
        <label>Project Description</label>
        <input
            type='text'
            placeholder='Add project description'
        />
    </div>

    <div>
        <label>Project Goal</label>
        <input
            type='text'
            placeholder='Add a goal'
        />
    </div>

    <div>
        <label>Project Photo</label>
        <input
            type='text'
            placeholder='Add image URL '
        />
    </div>


    <button type='submit'> Create New Project</button>
    </form>
    )
}

export default ProjectForm