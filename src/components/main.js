import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from './footer';

import '../main.css';
import Hamburger from 'hamburger-react'

function Main() {

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div id="main">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="profile-img">
                            <img src="images/profile.png" alt="profile-pic" />
                        </div>
                        <div className="profile-content">
                            <h3 className="profile-name">
                                Callum Hepworth
                            </h3>
                            <p className="profile-text">
                                Engineering Physics Student at UBC
                            </p>
                            <hr className="bio-divider" />
                            <ul>
                                <li>
                                    <a href="https://github.com/calhep">
                                        <FontAwesomeIcon icon={faGithub} size='lg' className="fa-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/callumhepworth/">
                                        <FontAwesomeIcon icon={faLinkedin} size='lg' className="fa-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:callumahepworth@gmail.com">
                                        <FontAwesomeIcon icon={faSquareEnvelope} size='lg' className="fa-icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="dd">
                            <div className="dd-menu" style={{ display: isOpen ? 'inline-block' : 'none' }} id='hamburger-menu'>
                                <Link onClick={() => setOpen(!isOpen)} to="/">About Me</Link>
                                <Link onClick={() => setOpen(!isOpen)} to="/projects">Projects</Link>
                                <a onClick={() => setOpen(!isOpen)} href="pdfs/Callum_Hepworth_Resume.pdf">Resumé</a>
                            </div>

                            <div className="dd-button">
                                <Hamburger toggled={isOpen} toggle={setOpen} />
                            </div>
                        </div>
                    </div>

                    <hr className="mobile-divider" />

                    <div className="body">
                        <div className="sections">
                            <ul>
                                <li><Link to="/">About Me</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><a href="pdfs/Callum_Hepworth_Resume.pdf">CV</a></li>
                            </ul>
                            <hr />
                        </div>
                        <div className="body-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Main;