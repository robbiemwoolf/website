import './Portfolio.css'

export default function ByteCard({ card }) {
    const live = card.site;
    const github = card.github
    const tools = card.tools;

    const openLive = () => {
        const win = window.open(live, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }

    const openGitHub = () => {
        const win = window.open(github, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }

    return (
        <>
        <div className='card'>
            <div className='head'>
                { live.length > 0 ? (
                <img className='link link-byte' src='images/openWindow.png' alt='Open Live Site' onClick={openLive} />
                ) : null }
                <h4 className='title'>{card.title}</h4>
                <img className='link link-byte' src='images/gitHub.png' alt='Open GitHub Repo' onClick={openGitHub} />
            </div>
            <div className='info'>
                <p className='description'>
                    {card.description}
                </p>
                <img className='peak' src={card.img} alt={card.alt} />
            </div>
            { tools.length > 0 ? (
                <small className='tech'>{card.tools}</small>
                ) : null }
        </div>
        </>
    )
}