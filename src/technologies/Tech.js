import './Tech.css';

export default function Train() {

    const js = <img src='images/tech-logos/JavaScript-logo.png' className='tech-logo glow' alt='JavaScript' ></img>
    const react = <img src='images/tech-logos/react-logo.png' className='tech-logo' alt='React' ></img>
    const node = <img src='images/tech-logos/node-logo.png' className='tech-logo' alt='NodeJS' ></img>
    const express = <img src='images/tech-logos/express-logo.png' className='tech-logo' alt='Express' ></img>
    const npm = <img src='images/tech-logos/npm-logo.png' className='tech-logo' alt='npm' ></img>
    const postgreSQL = <img src='images/tech-logos/postgreSQL-logo.png' className='tech-logo' alt='PostgreSQL' ></img>
    const git = <img src='images/tech-logos/git-logo.png' className='tech-logo' alt='Git' ></img>
    const jQuery = <img src='images/tech-logos/jQuery-logo.png' className='tech-logo' alt='jQuery' ></img>
    const HTML = <img src='images/tech-logos/html-logo.png' className='tech-logo' alt='HTML' ></img>
    const CSS = <img src='images/tech-logos/css-logo.jpg' className='tech-logo' alt='CSS' ></img>


    return (
        <div className='banner'>
            {js}
            {CSS}
            {react}
            {node}
            {express}
            {npm}
            {postgreSQL}
            {git}
            {jQuery}
            {HTML}
        </div>
    )
}