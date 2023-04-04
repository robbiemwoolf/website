import './Portfolio.css'

export default function ProjectCard({ card }) {
    const live = card.site;
    const tools = card.tools;

    return (
        <>
        <div className='card'>
            <div className='head'>
                { live.length > 0 ? (
                <a className='link-light' href={card.site} title='Live Site'><i className='bi bi-eye'></i></a>
                ) : null }
                <h4 className='title'>{card.title}</h4>
                <a className='link-light' href={card.github} title='GitHub Repository'><i className='bi bi-github'></i></a>
            </div>
            <div className='filter'>
                <img className='screenshot' src={card.img} alt={card.alt} />
            </div>
            <div className='info'>
                <p className='text'>{card.description}</p>
                { tools.length > 0 ? (
                <small className='tech'>{card.tools}</small>
                ) : null }
            </div>
        </div>
        </>
    )
}