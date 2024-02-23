import React from 'react'
import './widget.css'
import { FaArrowRight } from "react-icons/fa6";

function Widget({ icon, title, body }) {
    return (
        <div className='widget'>
            <>
                <div className='widget_header'>
                    {icon}
                    <div className='widget_title'>{title}</div>
                </div>
                <div className='widget_body'>{body}</div>
            </>
            <a href="#" className='learn_more'>Learn More <FaArrowRight style={{ marginBottom: "1px" }} /></a>
        </div>
    )
}

export default Widget