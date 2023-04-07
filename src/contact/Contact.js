import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [hidden, setHidden] = useState(false)

    const toggle = () => { setHidden(!hidden) }
    const form = (
        <form>
            <div className='form-group'>
                <label htmlFor="name">
                    <input 
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        required
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
                        required
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
                        required
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

    // eslint-disable-next-line no-unused-vars
    const [_body, setBody] = useState(form)

    // const emailToMe = `Name: ` + name + `<br /> email: ` + email + `<br /> message: ` + message

    return (
        <div className='contact'>
            <header>Contact</header>
            <div className='body'>
                {hidden ? confirmation : form }
                <button id='btn' type="submit" className={hidden ? 'hidden' : 'null'} onClick={()=>{
                    toggle()
                    setBody(confirmation)
                }}>Send</button>
            </div>
        </div>
    )
}