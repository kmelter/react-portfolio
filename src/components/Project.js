import React from "react";
import ProjectList from "./ProjectList";

const Project = () => {
    return (
        <div className="work-examples">    
            {ProjectList.map(project => (
                <section className="card">
                    <h2>{project.projectName}</h2>
                    <img src={project.image} alt="" />
                    <div className="project-links">
                        <a href={project.deployedApp} target="_blank">
                            Deployed Application
                        </a>
                        <a href={project.gitHubPage} target = "_blank">
                            GitHub Link
                        </a>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Project;