import './Footer.css'

export default function Footer() {
    
    const openLinkedIn = () => {
        const link = 'https://www.linkedin.com/in/robbiewoolf/'
        const win = window.open(link, '_blank')
        if (win) {
            // browser has allowed it to be opened
            win.focus()
        } else {
            // browser has blocked it
            alert('Please allow popups for this website')
        }
    }

    const openGitHub = () => {
        const link = 'https://github.com/robbiemwoolf'
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
        <div className='footer'>
            <p className='profile' onClick={openLinkedIn}>LINKEDIN</p>
            <p className='name'>RW</p>
            <p className='profile' onClick={openGitHub}>GITHUB</p>
        </div>
    )
}