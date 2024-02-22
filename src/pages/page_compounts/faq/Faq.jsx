import React from 'react'
import './Faq.css'
import Question from '../../../compounts/faq/Question'
function Faq() {
    return (
        <div className='faq'>
            <h1 className='faq_h1'>Frequently asked Questions</h1>
            <h3 className='faq_h3'>Have any questions? Reach out to our team at support@givestation.com</h3>

            <div className='faq_body'>
                <Question question={"What is givstation?"} />
                <Question question={"How can verify my project?"} />
                <Question question={"What type of project will qualify for a Grant?"} />
                <Question question={"How can I increase my chances of getting funded?"} />
                <Question question={"Is there a Token associated with GiveStation?"} />
            </div>
        </div>
    )
}

export default Faq