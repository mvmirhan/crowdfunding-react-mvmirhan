import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
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

    const projectID = projectData.id

    return (
        <div className='one-project-card'>
            <img src={projectData.image} alt='project'/>
            <h2>{projectData.title}</h2>
            <p>Project ID: {projectID}</p>
            <p>{projectData.description}</p>
            <p>Created at: {projectData.date_created}</p>
            <p>{`Status: ${projectData.is_open}`}</p>
            <Link className='a-pledge' to="/pledges" >I want to pledge</Link>
            <h4>Pledges: </h4>
            <ul>
                {projectData.pledges.map((pledgeData,) => {
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

