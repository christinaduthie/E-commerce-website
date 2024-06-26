import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
const Home = () => {
  const year= new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending Books in {year}
              </p>
              <h2>Escape Reality, One Book at a Time.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit, alias amet deleniti dolores odit quaerat accusantium veritatis mollitia provident!</p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn">
                <Link to='/shop'>SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      <Services/>
    </Helmet>
  );
};

export default Home