import React from 'react'
import './news_item.css'
import { FaArrowRight } from "react-icons/fa6";
function News_item({ link, title, body, img }) {
    return (
        <div className='news_item'>
            <img className='news_img' src={img} alt="" />
            <div className='news_desc'>
                <div className='news_title'>{title}</div>
                <p className='news_p'>{body}</p>
                <a className='learn_more' href={`${link}`}>Learn More <FaArrowRight style={{ marginBottom: "1px" }} /></a>
            </div>
        </div>
    )
}

export default News_item