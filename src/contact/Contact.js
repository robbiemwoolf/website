import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showButton, setShowButton] = useState(true)

    const toggleButton = () => { setShowButton(!showButton) }
    const form = (
        <form>
            <div className='form-group'>
                <label htmlFor="name">
                    <input 
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label htmlFor="email">
                    <input 
                        type="text"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label htmlFor="message">
                    <textarea
                        type="text"
                        id="message"
                        placeholder="Your Message"
                        name="message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                </label>
            </div>
        </form>
    )

    const confirmation = (
        <p className='confirmation'>Thanks for reaching out! You can expect a reply back within 1 - 2 business days.</p>
    )

    const [body, setBody] = useState(form)

    return (
        <div className='contact'>
            <header>Contact</header>
            <div className='body'>
                {body}
                <button type="submit" onClick={()=>{
                    toggleButton()
                    setBody(confirmation)
                }}>Send</button>
            </div>
        </div>
    )
}