import './Header.css'
import Menu from './Menu'
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)

        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
            <div className={(offset > 0) ? "header sticky" : "header"}>
                <a href='#contact' alt='Send me a message!'><img className='ctaHead' alt='contact me' src='images/contactMe.svg'></img></a>
                <div className='container'><h1>Woolf</h1></div>
                <Menu />               
            </div>
    )
}