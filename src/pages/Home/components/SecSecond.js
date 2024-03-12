import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TabSlider from '../../../component/TabSlider/TabSlider'

const SecSecond = () => {
  return (
    <div className="SecSecond sec-even sec-padt-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TabSlider />                
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default SecSecond