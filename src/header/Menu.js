import './Menu.css'
import { useState } from 'react'

export default function Menu() {  
    const [isActive, setActive] = useState('true')
    const toggle = () => {
        setActive(!isActive)
    }

    return (
        <div className='container'>
            <div className={isActive ? "hamburger" : "is-active hamburger"} onClick={toggle}>
                <div className='bar'></div>
            </div>
            <nav className={isActive ? "hidden" : "navbar"}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className='nav-link'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#portfolio' className='nav-link'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' className='nav-link'>Contact</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#resume' className='nav-link'>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}