import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                <Container>
                    <hr/>
                    <Row>
                        <Col xs lg='2'>Callum Hepworth @2022</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;