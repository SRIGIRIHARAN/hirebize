import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const SecFive = () => {
  return (
    <div className="s-five-banner">
        
        <Container>
            <h1>Case Study</h1>
            <Row xs={1} md={2} lg={3} className="g-4" style={{border: '1px solid red'}}>
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="./assets/case-study-1.png" />
                            <Card.Body>
                                <Button variant="primary">Go somewhere</Button>
                                <Card.Title>Workflow System Energy</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default SecFive