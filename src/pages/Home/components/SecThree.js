import React from 'react'
import '../../../../src/App.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SwipeToSlide from '../../../component/SwipeToSlide'

const SecThree = () => {
  return (
    <div className="s-three-banner sec-even">
        <div className="s-three-inner-banner">
            <Container>
                <Row>
                    <Col lg={6} className="d-flex justify-content-center align-items-start mt-5">
                        <div className="inner-text">
                            <h1 className='display-4'>Industries <br /> that we <br /> work with</h1>
                        </div>
                    </Col>
                    <Col lg={6} className="card-slider d-flex justify-content-center ">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src="./assets/government.png" fluid/>
                            <Card.Body>
                                <Card.Title>Government</Card.Title>
                                <Card.Text>
                                    Pellentesque vitae eros vel purus pellentesque<br />
                                    faucibus. Suspendisse tempus molestie felis,<br />
                                    eu consectetur lorem ullamcorper sit amet.<br /><br />
                                    Aliquam tempus pellentesque neque dignissim<br />
                                    consequat. Pellentesque est turpis, elementum<br />
                                    eget consequat at, mattis non quam.<br />
                                    Sed tempus dignissim lectus ut blandit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default SecThree;