import './About.css';

export default function About() {
    const currentBlurb = "Right now I am focusing on a revamp of this personal website. A lot of changes have been made over the past week and I still have a long way to go. Here's a look at what this page use to look like:";
    const additionalBlurb = 'This new design includes: a more responsive layout; a chance to showcase more of my current projects, both large and small; and a few animations.';
    const look = <img className='look' src='/images/previous-website.png' alt='previous website design' ></img>;
    
    const handleClick = () => {
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

    return (
        <div className='background' >
        <div className='main'>
            <div className='current'>
                <div className='ledge'>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                </div>
                <div className='mid'>
                    <header>currently coding</header>
                    <p className='body'>
                        {currentBlurb}
                        {look}
                        {additionalBlurb}
                    </p>
                </div>
                <div className='redge'>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                    <div className='hole'></div>
                </div>
            </div>
            <div className='bio'>
                <img src='images/gry_rob_sqr_bird_feet_look_left.jpg' className='photo' alt='Robbie Woolf' />
                <div className='about-body'>
                    <header>Hi. I’m Robbie</header>
                    <div className='body'>
                        <p>And I am a full stack web developer specializing in <span className='spotlight'>JavaScript</span>, <span className='spotlight'>React</span>, <span className='spotlight'>Node</span>, and <span className='spotlight'>CSS</span>. I have a passion for learning and increase my skills daily.</p>
                        <p>I offer a <span className='spotlight'>fresh perspective</span>! Outside of my technical competencies, my prior welding career gave me experience with detail-oriented builds, keeping client satisfaction a top priority, and managing large-scale projects with tight deadlines.</p>
                        <p>As an advocate for interpersonal community building and awesome websites, I would love to help you with your next project. <span className='resume' alt='Resume' onClick={handleClick} title='Resume'>Reach out</span>!</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ) 
}