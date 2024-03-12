import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const SecFive = () => {
  return (
    <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
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
  )
}

export default SecFive