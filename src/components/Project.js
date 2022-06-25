import React from "react";
import ProjectList from "./ProjectList";

const Project = () => {
    return (
        <div>    
            {ProjectList.map(project => (
                <section>
                    <h2>{project.projectName}</h2>
                    <img src={project.image} alt="" />
                    <a href={project.deployedApp} target="_blank">
                        Deployed Application
                    </a>
                    <a href={project.gitHubPage} target = "_blank">
                        GitHub Link
                    </a>
                </section>
            ))}
        </div>
    );
}

export default Project;