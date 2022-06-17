import React from "react";

import project_data from '../project_data.json'
import '../projects.css'


function Projects() {

    const parseImg = (img) => {
        return "images/" + img + ".png";
    }

    return (
        <div className="project-section">
            {project_data.map((data) => (
                <div key={data.id}>
                    <div className="project">
                        <div className="project-text">
                            <h3>{data.title}</h3>
                            <p>{data.body}</p>
                        </div>
                        <div className="project-image">
                            <img src={parseImg(data.image)} alt={data.image} />
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Projects;