import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

export default function Contact() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s1f7l2q', 'template_mv461tv', form.current, 'MS2tFnre-NiSuWtl7')
          .then((response) => {
              console.log('200 - email sent', response)
              setValues({
                name: '',
                email: '',
                message: ''
              })
              setStatus('SUCCESS')
          }, (error) => {
              console.log('FAILED ...', error)
          })
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('')
            }, 3000)
        }
    }, [status])

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value
          }))
    }

    
    const confirmation = () => {
        return (
            <div className='confirmation'>
                <p>Thanks for reaching out! You can expect a reply back within 1 - 2 business days.</p>
            </div> 
        )  
    }

    return (
        <div className='contact' name='contact' id='contact'>
            <header>Contact</header>
            <div className='body'>
                {status && confirmation()}
                <form ref={form} onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="name">
                            <input 
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                name="name"
                                required
                                value={values.name}
                                onChange={handleChange}
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
                                value={values.email}
                                onChange={handleChange}
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
                                value={values.message}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <input type="submit" value="send" />
                </form>
            </div>
        </div>
    )
}