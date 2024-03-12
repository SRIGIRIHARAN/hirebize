import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const SecFour = () => {
  return (
    <div className="s-four-banner">
        <div className="s-four-inner-banner">
            <div className="why-choose-us-head">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h1>WHY CHOOSE <br /> US?</h1>
                        </Col>
                        <Col lg={6}>
                            <p>
                                Tailored to you we create custom<br />
                                software specifically designed to meet<br />
                                your unique business needs.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="why-choose-us-body">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="inner-text">
                                <div>
                                    <h4>15+</h4>
                                    <h4>04+</h4>
                                    <h4>150+</h4>
                                    <h4>2540+</h4>                                
                                </div>

                                <div>
                                    <p>
                                        With 15years of experience,<br /> 
                                        we have earned numerous awards
                                    </p>
                                    <p>
                                        We have offices in four<br />
                                        countries worldwide.
                                    </p>
                                    <p>
                                        We have a team of over<br />
                                        150 certified full-time professionals.
                                    </p>
                                    <p>
                                        We have successfully implemented<br /> 
                                        over 2,540 projects.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="desc-text">
                                <p>
                                    We pride ourselves on delivering high-quality<br />
                                    custom software solutions that drive<br />
                                    business growth and success.<br /><br />

                                    You gain a trusted partner who is dedicated to<br />
                                    understanding your unique requirements and<br />
                                    delivering innovative, and secure software<br />
                                    tailored to your needs.
                                </p>
                            </div>

                            <div className="desc-buttons">
                                <Button variant='light'>Contact Us</Button>
                                <Button variant='light'>Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default SecFour