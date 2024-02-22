import React from 'react'
import './products.css'
import { FaArrowRight } from "react-icons/fa6";
import Product_item from '../../../compounts/product/Product_item';

function Products() {
    return (
        <div className='products' id='project'>
            <h1 className='products_title'>Projects built with grants</h1>
            <div className='products_item'>
                <Product_item />
                <Product_item />
                <Product_item />
            </div>
            <div className='View_more_projects'>View more projects <FaArrowRight /></div>
        </div>
    )
}

export default Products