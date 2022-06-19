import React from "react";

import project_data from '../project_data.json'
import '../projects.css'

function Media(props) {

    if (props.media === "video") {
        return (
            <video width="200px" height="auto" controls>
                <source src={"videos/" + props.filename + ".mp4"} type="video/mp4" />
            </video>
        );
    };
    if (props.media === "image") {
        return (
            <img src={"images/" + props.filename + ".png"} alt={props.filename} />
        );
    };
}

function ProjectLink(props) {
    if (props.link !== "") {
        return (
            <a href={props.link}>Learn more.</a>
        )
    }
}


function Projects() {
    return (
        <div className="project-section">
            {project_data.map((data) => (
                <div key={data.id}>
                    <div className="project">
                        <div className="project-description">
                            <h3>{data.title}</h3>
                            <p>{data.body}</p>
                            <ProjectLink link={data.link} />
                        </div>
                        <div className="project-media">
                            <Media media={data.media} filename={data.filename} />
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Projects;