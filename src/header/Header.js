import './Header.css'

export default function Header() {

    const handleClick1 = event => {
        console.log(event.target)
        console.log('logo clicked')
        const link='https://www.linkedin.com/in/robbiewoolf/'
        const win = window.open(link, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }

    const handleClick2 = event => {
        console.log(event.target)
        console.log('logo clicked')
        const link='https://github.com/robbiemwoolf'
        const win = window.open(link, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }
    
    return (
        <div className='card mb-3'>
            <div className='row g-0'>
                <div className='col-md-4'>
                <img src='images/woolf-logo.png' className='img-fluid rounded-start' alt='...' />
                </div>
                <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>Hi, I am <text className='special text-bg'>Robbie Woolf</text></h5>
                    <p className='card-text'>Full-Stack Developer</p>
                    <div className='row'>
                        <div className='logo-links mx-2'>
                            <img src='images/linkedinlogo.png'  alt='LinkedIn' onClick={handleClick1} className='logo-links'/>
                        </div>
                        <div className='logo-links'>
                            <img src='images/githublogo.png' alt='GitHub' onClick={handleClick2} className='logo-links'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}