import React from 'react';

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../App.js'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <a href="https://github.com/calhep">
                            <FontAwesomeIcon icon={faGithub} size='xl' className="fa-icon" />
                        </a>
                    </li> 
                    <li>
                        <a href="https://www.linkedin.com/in/callumhepworth/">
                            <FontAwesomeIcon icon={faLinkedin} size='xl' className="fa-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:callumahepworth@gmail.com">
                            <FontAwesomeIcon icon={faSquareEnvelope} size='xl' className="fa-icon" />
                        </a> 
                    </li>
                </ul>

                <div id='copyright'>
                    Designed by Callum H. using React.
                </div>

            </footer>
        )
    }
}

export default Footer;