import React from 'react'
import './question.css'
import { FaPlus } from "react-icons/fa6";

function Question({ question, answer }) {
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
                {answer}
            </div>
        </div>
    )
}

export default Question