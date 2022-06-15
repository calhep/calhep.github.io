import React from 'react'
import { Link, Routes, Route } from "react-router-dom";

import '../main.css';

import doggo from "../images/IMG_9120.png"
import resume from "../resume/Callum_Hepworth_Resume.pdf"

import Projects from './projects';
import About from './about';

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="profile-img">
                            <img src={doggo} alt="doggo" />
                        </div>
                        <div className="profile-content">
                            <h3 className="profile-name">
                                Callum Hepworth
                            </h3>
                            <p className="profile-text">
                                Engineering Physics Student at UBC
                            </p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="sections">
                            <ul>
                                <li><Link to="/about">About Me</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><a href={resume}>CV</a></li>
                            </ul>
                            <hr />
                        </div>
                        <div className="body-content">
                            <Routes>
                                <Route path="about" element={<About />} />
                                <Route path="projects" element={<Projects />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;