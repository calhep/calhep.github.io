import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../App.js'

class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <hr/>
                <div>
                    <FontAwesomeIcon icon={faGithub} size='lg' />
                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                    <FontAwesomeIcon icon={faSquareEnvelope} size='lg' />
                </div>

                <div id='copyright'>
                    Callum Hepworth @2022
                </div>

            </div>
        )
    }
}

export default Footer;