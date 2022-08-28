import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'


function HomePage() {

    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json()
        })
        .then((projectList) => {
            setProjectList(projectList)
        })
        setProjectList(projectList)
    }, [])

    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            }
            )}
        </div>
        )
}

export default HomePage