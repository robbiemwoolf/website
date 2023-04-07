import './Header.css'
import Menu from './Menu'

export default function Header() {  
    return (
            <div className='header'>
                <div className='container'><h1>Woolf</h1></div>
                <Menu />               
            </div>
    )
}