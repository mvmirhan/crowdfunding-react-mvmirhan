import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard(props) {
    const { projectData } = props

    return (
        <div className='project-card'>
            <Link to={`/project/${projectData.id}`}>
            <img src={projectData.image} alt='project'/>
            <h3>{projectData.title}</h3>
            <h4>Goal: ${projectData.goal}</h4>
            </Link>
        </div>
    )
}

export default ProjectCard