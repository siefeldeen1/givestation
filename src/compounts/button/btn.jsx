import React from 'react'
import './btn.css'
function Button({ text, styles, icon }) {
    return (
        <button className='basic_btn' style={styles}>
            {text}
            {icon}
        </button>
    )
}

export default Button