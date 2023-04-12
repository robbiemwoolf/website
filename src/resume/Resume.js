import './Resume.css'

export default function Resume() {
    return (
            <>
            <div className='downloadRow'>
                <a className='res' href={ process.env.PUBLIC_URL + '/files/robbie-woolf-resume.pdf' } title='Download PDF' download='resumeRobbieWoolf.pdf'>Download PDF</a>
                <a className='res' href={ process.env.PUBLIC_URL + '/files/robbie-woolf-resume.docx' } title='Download DOCX' download='resumeRobbieWoolf.docx' >Download DOCX</a>
            </div>
            <div className='embed'>
                <iframe title='resume' src="https://drive.google.com/file/d/12nOdvGSl3ouV4xKgX1oW4wi16qBCkHhc/preview" width="90%" height="480" allow="autoplay"></iframe>
            </div>
        </>
    )
}