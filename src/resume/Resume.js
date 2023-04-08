import './Resume.css'

export default function Resume() {
    return (
        <>
            <div className='resume-links'>
                <button className='btn'>Download PDF</button>
                <button className='btn'>Download DOCX</button>
            </div>
            <div className='embed'>
                <iframe title='resume' src="https://drive.google.com/file/d/12nOdvGSl3ouV4xKgX1oW4wi16qBCkHhc/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        </>
    )
}