import './Tech.css';

export default function Train() {

    const js = <div className='tech'><img src='images/tech-logos/javascript-logo.png' className='size' alt='JavaScript' ></img><div className='text adjust'>JavaScript</div></div>
    const react = <div className='tech'><img src='images/tech-logos/react-logo.svg' alt='React' ></img><div className='text'>React</div></div>
    const node = <div className='tech'><img src='images/tech-logos/node-logo.svg' alt='NodeJS' ></img><div className='text'>Node</div></div>
    const npm = <div className='tech'><img src='images/tech-logos/npm-logo.svg' alt='npm' ></img><div className='text'>npm</div></div>
    const postgreSQL = <div className='tech'><img src='images/tech-logos/postgresql-logo.png' className='size' alt='PostgreSQL' ></img><div className='text adjust'>PostgreSQL</div></div>
    const git = <div className='tech'><img src='images/tech-logos/git-logo.svg' alt='Git' ></img><div className='text'>Git</div></div>
   // const jQuery = <div className='tech'><img src='images/tech-logos/jquery-logo.png' alt='jQuery'></img><div className='text'>jQuery</div></div>
    const HTML = <div className='tech'><img src='images/tech-logos/html-logo.svg' alt='HTML' ></img><div className='text'>HTML</div></div>
    const CSS = <div className='tech'><img src='images/tech-logos/css-logo.svg' alt='CSS' ></img><div className='text'>CSS</div></div>


    return (
        <div className='banner'>
            {js}
            {CSS}
            {react}
            {node}
            {npm}
            {postgreSQL}
            {git}
            {HTML}
        </div>
    )
}