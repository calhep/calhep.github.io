import React from "react";

import project_data from '../project_data.json'
import '../projects.css'


function parseImgUrl(img) {
    return "images/" + img + ".png";
}

function parseVideoUrl(video) {
    return "videos/" + video + ".mp4"
}

function Media(props) {

    if (props.media === "video") {
        return (
            <video width="200px" height="auto" controls>
                <source src={parseVideoUrl(props.filename)} type="video/mp4" />
            </video>
        );
    };
    if (props.media === "image") {
        return (
            <img src={parseImgUrl(props.filename)} alt={props.filename} />
        );
    };
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
                            <a href={data.link}>Learn more.</a>
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