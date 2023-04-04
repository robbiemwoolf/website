import './Portfolio.css'

export default function ProjectCard({ card }) {
    const live = card.site;
    const tools = card.tools;

    return (
        <>
        <div className='card'>
            <div className='head'>
                { live.length > 0 ? (
                    <a href={card.site} title='Live Site'><img className='link' src='images/openWindow.png' alt='Open Live Site' /></a>
                ) : null }
                <h4 className='title'>{card.title}</h4>
                <a href={card.github} title='GitHub Repository'><img className='link' src='images/gitHub.png' alt='Open GitHub Repo' /></a>
            </div>
            <div className='filter'>
                <img className='screenshot' src={card.img} alt={card.alt} />
            </div>
            <div className='info'>
                <p className='description'>{card.description}</p>
            </div>
            { tools.length > 0 ? (
                <small className='tech'>{card.tools}</small>
                ) : null }
        </div>
        </>
    )
}