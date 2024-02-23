import React from 'react'
import './Product.css'
import { FaArrowRight } from "react-icons/fa6";
function Product_show({ img, title, tag, body }) {
    return (
        <div className='product_show'>
            <div className='prod_title_cont'>
                <img src={img} className='prod_img' alt="" />
                <div className='prod_title'>{title}</div>
            </div>
            <div className='prod_tag'>{tag}</div>
            <p className='prod_body'>{body}</p>
            <a href='#' className='learn_more'>Learn More <FaArrowRight style={{ marginBottom: "1px" }} /></a>
        </div>
    )
}

export default Product_show