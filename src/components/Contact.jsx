import React from 'react'

const Contact = () => {
    return (
        <div className="contact-section container">
            <div className="contact-data flex flex-col">
                <p className="contact-para"> 35,000+ already joined</p>
                <h1 className="contact-h1">Stay up-to-date with what we’re doing</h1>
                <form onSubmit={(e)=>e.preventDefault()} action="" className="contact-form">
                    <input type="text" className="contact-input" placeholder='Enter your email address' />
                    <button className="btn contact-btn">Contact Us</button>
                </form>
            </div>
        </div>
    )
}

export default Contact