import './Footer.css'

export default function Footer() {
    const handleClick1 = event => {
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

    const handleClick3 = event => {
        const link='https://docs.google.com/document/d/1-wGFZkW04AqZMVYcEb2viZ42Yt3O885TyAj4kvqacaw/edit?usp=sharing'
        const win = window.open(link, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }

    const handleClick4 = event => {
        const link='tel://4052557115'
        const win = window.open(link, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }

    const handleClick5 = event => {
        const link='mailto:robbiemwoolf@gmail.com'
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
        <div className='d-flex justify-content-center align-items-center text-white'>
            <div className='logo-holder mx-2'>
                <img src='images/linkedinlogo.png'  alt='LinkedIn' onClick={handleClick1} className='logo-links' title='LinkedIn Profile' />
            </div>
            <div className='logo-holder mx-2'>
                <img src='images/githublogo.png' alt='GitHub' onClick={handleClick2} className='logo-links' title='GitHub Profile' />
            </div>
            <div className='d-flex col-md-3 yellow mx-2 justify-content-center'>
                    <img src='images/glowing_detail_wolf.png' className='img-fluid wolf p-2' alt='Resume' onClick={handleClick3} title='Resume'/>
            </div>
            <div className='logo-holder mx-2'>
                <img src='images/contact.png' alt='Contact Info' onClick={handleClick4} className='logo-links' title='(405) 255-7115' />
            </div>
            <div className='logo-holder mx-2'>
                <img src='images/email.png' alt='Email' onClick={handleClick5} className='logo-links' title='robbiemwoolf@gmail.com' />
            </div>
        </div>
    )
}