
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import products from 'E:/My projects/E-commerce-website/src/assets/data/products.js';

import heroImg from '../assets/images/hero-img.jpg'
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState(products);

    const [bestSalesProducts, setBestSalesProducts] = useState(products);
    const year = new Date().getFullYear()

    useEffect(() => {
        const filteredTrendingProducts = products.filter(item => item.category === 'Fiction');
        const filteredBestSalesProducts = products.filter(item => item.category === 'Fiction');

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
    }, []);

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
        <Services />
        <section className='trending__products'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='section__title'>Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts} />
                </Row>
            </Container>
        </section>
        <section className='best__sales'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='section__title'>Best Sales</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts} />
                </Row>
            </Container>
        </section>
    </Helmet >
}

export default Home;