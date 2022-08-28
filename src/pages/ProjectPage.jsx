import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../ProjectCard/ProjectCard.css'

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] })
    const { id } = useParams()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json()
        })
        .then((data) => {
            setProjectData(data)
        })
    },[])

    return (
        <div className='one-project-card'>
            <img src={projectData.image} alt='project'/>
            <h2>{projectData.title}</h2>
            <p>{projectData.description}</p>
            <h4>Created at: {projectData.date_created}</h4>
            <h4>{`Status: ${projectData.is_open}`}</h4>
            <h3>Pledges: </h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            ${pledgeData.amount} from {pledgeData.supporter} with Comment: "{pledgeData.comment}"
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProjectPage