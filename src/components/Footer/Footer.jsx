import React from 'react'

import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg="4" className='mb-4' md='6'>
                    <div className='logo'>
                        <div>
                            <h1 className='text-white'>Readers's Den</h1>
                        </div>
                    </div>
                    <p className='footer__text mt-4'>Esse dolor cillum ipsum tempor irure ad et est. Veniam culpa esse veniam sit aliqua do consectetur et ipsum Lorem velit pariatur in. Labore amet ipsum dolore mollit aliquip.</p>
                </Col>
                <Col lg="3" md='3' className='mb-4'>
                    <div className='footer__quick-links'>
                        <h4 className='quick__links-title'>Top Categories</h4>
                        <ListGroup className='mb-3'>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>
                                    Mystery
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>
                                    Novel
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>
                                    Leadership
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>
                                    Non fiction
                                </Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2" md='3' className='mb-4'>
                    <div className='footer__quick-links'>
                        <h4 className='quick__links-title'>Useful Links</h4>
                        <ListGroup className='mb-3'>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/shop'>
                                    Shop
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/cart'>
                                    Cart
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>
                                    Privacy Policy
                                </Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="3" md='3'>
                    <div className='footer__quick-links'>
                        <h4 className='quick__links-title'>Contact</h4>
                        <ListGroup className='footer__contact'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-map-pin-line"></i></span>
                                <p>Fatima Nagar, Pune, India</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-phone-line"></i></span>
                                <p>+91 9999999999</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-mail-line"></i></span>
                                <p>qwerty@gmail.com</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="12">
                    <p className='footer__copyright'>
                        Copyright {year} developed by Duthie
                    </p>
                </Col>
            </Row>
        </Container></footer >
}

export default Footer