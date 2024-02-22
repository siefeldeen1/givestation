import React from 'react'
import './question.css'
import { FaPlus } from "react-icons/fa6";

function Question({ question }) {
    const faq = (e) => {
        if (e.currentTarget.children[1].style.display == "block") {
            e.currentTarget.children[1].style.display = "none"
        } else {
            e.currentTarget.children[1].style.display = "block"
        }
    }
    return (
        <div className='question' onClick={(e) => { faq(e) }}>
            <div className='header'>
                {question}
                <FaPlus />
            </div>
            <div className='answer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis facilis non magni ipsum quibusdam debitis velit a, quas illum illo, veniam fugiat eligendi inventore consequatur, officia quia repellat vitae.
            </div>
        </div>
    )
}

export default Question