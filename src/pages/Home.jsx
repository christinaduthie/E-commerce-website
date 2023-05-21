
import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.jpg'
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';
const Home = () => {
    const year = new Date().getFullYear()
    return < Helmet title={"Home"} >
        <section className='hero__section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero__content'>
                            <p className='hero__subtitle'>Books released in {year}</p>
                            <h2>Let's get lost in a world made of books and coffee</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim risus, vitae gravida massa venenatis bibendum.  </p>
                            <button className='buy__btn'><Link to='/shop'>SHOP NOW</Link></button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='hero__img'>
                            <img src={heroImg} alt=''></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet >
}

export default Home;