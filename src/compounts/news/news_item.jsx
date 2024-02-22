import React from 'react'
import './news_item.css'
import { FaArrowRight } from "react-icons/fa6";
function News_item() {
    return (
        <div className='news_item'>
            <img className='news_img' src="/imgs/news.png" alt="" />
            <div className='news_desc'>
                <div className='news_title'>Join Givestation ambassador...</div>
                <p className='news_p'>A community of creators and remote web3 builders who use blockchain to earn a living online.</p>
                <div className='learn_more'>Learn More <FaArrowRight style={{ marginBottom: "1px" }} /></div>
            </div>
        </div>
    )
}

export default News_item