import './Tech.css';

export default function Train() {

    const js = <div className='row'><img src='images/tech-logos/JavaScript-logo.svg' className='tech-logo' alt='JavaScript' ></img><div className='small'>JavaScript</div></div>
    const react = <div className='row'><img src='images/tech-logos/react-logo.svg' className='tech-logo' alt='React' ></img><div className='small'>React</div></div>
    const node = <div className='row'><img src='images/tech-logos/node-logo.svg' className='tech-logo' alt='NodeJS' ></img><div className='small'>JNode</div></div>
    const figma = <div className='row'><img src='images/tech-logos/figma-logo.svg' className='tech-logo' alt='Figma' ></img><div className='small'>Figma</div></div>
    const npm = <div className='row'><img src='images/tech-logos/npm-logo.svg' className='tech-logo' alt='npm' ></img><div className='small'>npm</div></div>
    const postgreSQL = <div className='row'><img src='images/tech-logos/postgreSQL-logo.svg' className='tech-logo' alt='PostgreSQL' ></img><div className='small'>PostgreSQL</div></div>
    const git = <div className='row'><img src='images/tech-logos/git-logo.svg' className='tech-logo' alt='Git' ></img><div className='small'>Git</div></div>
    const jQuery = <div className='row'><img src='images/tech-logos/jQuery-logo.svg' className='tech-logo' alt='jQuery' ></img><div className='small'>jQuery</div></div>
    const HTML = <div className='row'><img src='images/tech-logos/html-logo.svg' className='tech-logo' alt='HTML' ></img><div className='small'>HTML</div></div>
    const CSS = <div className='row'><img src='images/tech-logos/css-logo.svg' className='tech-logo' alt='CSS' ></img><div className='small'>CSS</div></div>


    return (
        <div className='banner'>
            {js}
            {CSS}
            {react}
            {node}
            {npm}
            {postgreSQL}
            {git}
            {jQuery}
            {HTML}
            {figma}
        </div>
    )
}