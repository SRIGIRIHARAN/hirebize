import React from 'react'
import  '../../App.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const EvalutionAndDesign = () => {
  return (
    <div className='tab-list-div'>
        <Container>
            <Row>
                <Col lg={5} className='tab-list-image'>
                    <Image src='./assets/sec-second-1.png' fluid></Image>
                </Col>
                <Col lg={7} className='tab-list-text mt-4'>
                    <div className='tab-list-inner-text'>
                        <p>
                            We worked with <strong>IMeta</strong> lorem ipsum dolor sit amet <br />
                            consectetur adipiscing elit parturient, turpis <br />
                            habitant semper platea rhoncus et dignisutrum.
                        </p>
                    </div>

                    <div className='tab-list-features-list'>
                        <ul className='list-1'>
                            <li>RESEARCH & DEVELOPMENT</li>
                            <li>SCOPING SESSION</li>
                            <li>UI REVIEW</li>
                        </ul>
                        <ul className='list-2'>
                            <li>UI DESIGN</li>
                            <li>BRANDING</li>
                            <li>PRODUCT DESIGN</li>
                            <li>RAPID PROTOTYPING</li>
                        </ul>
                    </div>

                    <div className='tab-list-buttons'>
                        <Button variant='light'>Contact Us</Button>
                        <Button variant='light'>Learn More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default EvalutionAndDesign