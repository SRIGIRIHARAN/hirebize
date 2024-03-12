import React from 'react'
import '../../../../src/App.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const MainBanner = () => {
  return (
    <div className="main-banner">
          <Container>
              <Row>
                <Col lg={12}>
                  <div className="main-banner-inner-text sec-even sec-padt-70">
                    <div className="text-1 d-flex justify-content-center align-items-center col-12">
                      <h1 className='display-3'>Customized <span>Software</span></h1>
                      <Image src="assets/banner-1.png" fluid className='set-wt img-hover'></Image>
                    </div>

                    <div className="text-2 d-flex justify-content-center align-items-center col-12">
                      <h1 className='display-1'><span>Solutions</span></h1> 
                      <p className='display-1'>For <Image src="assets/banner-2.png" fluid className='set-wt img-hover'></Image> 
                          <Image src="assets/banner-2.png" fluid className='set-wt img-hover'></Image>
                      </p>
                    </div>

                    <div className="text-3 d-flex justify-content-center align-items-center col-12">
                      <Image src="assets/banner-1.png" fluid className='set-wt img-hover'></Image>
                      <Image src="assets/banner-3.png" fluid className='set-wt img-hover'></Image>
                      <h1 className='display-1'>Business</h1>
                      <Button variant='primary'><i class="bi bi-telephone-fill"></i> Contact</Button>{' '}
                    </div>

                    <div className='text-4'>
                      <div className='sub-text'>
                        <hr className='hr-line' />
                        <p>We worked with <span>IMeta</span> in a startup project.</p>
                      </div>
                      <div className='sub-text'>
                      <hr className='hr-line' />
                        <p> They are a professional and flexible team with</p>
                      </div>
                      <div className='sub-text'>
                      <hr className='hr-line' />
                        <p>different experience in many frameworks.</p>
                      </div>                      
                    </div>
                  </div>
                </Col>
              </Row>
          </Container>
        </div>
  )
}

export default MainBanner