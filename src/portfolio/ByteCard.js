import './Portfolio.css'

export default function ByteCard({ card }) {
    const live = card.site;
    const tools = card.tools;

    return (
        <>
        <div className='card'>
            <div className='head'>
                <h4 className='title'>{card.title}</h4>
                { live.length > 0 ? (
                <a className='link-light' href={card.site} title='Live Site'><i className='bi bi-eye'></i></a>
                ) : null }
                <a className='link-light' href={card.github} title='GitHub Repository'>
                    <i className='bi bi-github'></i>
                </a>
            </div>
            <div className='info'>
                <p className='text'>
                    {card.description}
                </p>
                <img className='peak' src={card.img} alt={card.alt} />
            </div>
        </div>
        </>
    )
}