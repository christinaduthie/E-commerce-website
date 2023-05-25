import React from 'react';
import productImg from '../../assets/images/leadership-book-01.jpg'
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';

const ProductCard = () => {
    return (
        <Col lg='3' md='4'>
            <div className='product__item'>
                <div className='product_img'>
                    <img src={productImg} alt=''></img> </div>
                <div className='p-2 product__info'>
                    <h3 className='product__name'>Leaders Eat Last</h3>
                    <span>Self Help</span>
                </div>
                <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
                    <span className='price'>$1.4</span>
                    <span><i class="ri-add-line"></i></span>
                </div>
            </div>
        </Col>
    );
};

export default ProductCard