import React from 'react'
import  '../App.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="set-nav">
                        <Navbar expand="lg">
                            <Navbar.Brand href="#home" className='col-3'><h3>HeirBiz</h3></Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <i className="bi bi-filter-right"></i>
                            </Navbar.Toggle>

                            <Navbar.Collapse id="basic-navbar-nav" className='col-6'>
                                <Nav className="me-auto">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">Services</Nav.Link>
                                    <Nav.Link href="#">Industries</Nav.Link>
                                    <Nav.Link href="#">Case Study</Nav.Link>
                                    <Nav.Link href="#">Page</Nav.Link>
                                    <Nav.Link href="#">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                            <div className='nav-sub col-2'>
                                    <div className="slide-switch form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                    </div>

                                    <div className="lang">
                                        <i class="bi bi-globe"></i>ENG
                                    </div>
                                </div>
                        </Navbar>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NavBar