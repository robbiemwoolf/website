import './Header.css'

export default function Header() {  


    return (
            <div className='header'>
                <div className='container'><h1>Woolf</h1></div>
                {/* <nav>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Contact</a>
                    <a href='#'>Resume</a>
                </nav> */}
                <button className='hamburger is-active'>
                    <div className='bar'></div>
                </button>
            </div>
    )
}