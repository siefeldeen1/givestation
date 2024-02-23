import React from 'react'
import './btn.css'
function Button({ text, styles, icon, classname }) {
    return (
        <button className={`basic_btn ${classname}`} style={styles}>
            {text}
            {icon}
        </button>
    )
}

export default Button