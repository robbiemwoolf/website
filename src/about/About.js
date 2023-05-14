import { Link } from 'react-router-dom';
import './About.css';

// ! reserving for when I enable access to previous blurbs
// const Blurbs = [
//     { 
//         "currentBlurb" : "Right now I am focusing on a revamp of this personal website. A lot of changes have been made over the past week and I still have a long way to go. Here's a look at what this page use to look like:",
//         "additionalBlurb" : "This new design includes: a more responsive layout; a chance to showcase more of my current projects, both large and small; and a few animations.",
//         "look" : <img className='look' src='/images/previous-website.png' alt='previous website design' ></img>
//     }
// ]

export default function About() {
    const currentBlurb = "  In effort to reconnect with past hobbies, I have been reading more. My partner and I have a collection that has continued to grow despite our reading slowing. Overwhelmed by the choices and wishing I didn't need to pull a book down just to be let down by the synopsis, I started developing Spine Chasers.";
    const additionalBlurb = "This application allows the user to browse their library quickly. Seeing covers, descriptions, and ratings at a glance in the same way we browse shows and movies on Netflix. The user adds a book to their collection by providing the ISBN. Upon providing the ISBN, the server makes a request to Google's BookAPI to fill in the rest of the book's details. Once complete, the book is added to the application's Postgresql database.";
    const look = '';
    const alternative = <Link className='alternative' to='https://github.com/robbiemwoolf/spine-chasers'>Check it out here!</Link>

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
                    <p className='body blurb'>
                        {currentBlurb}
                        <br />
                        {look ? look : alternative}
                        <br />
                        {additionalBlurb}
                    </p>
                    <div className='updateContainer'>
                        <small className='update'>Last updated 05/13/2023</small>
                    </div>
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
            <div className='bio' name='about' id='about'>
                <img src='images/gry_rob_sqr_bird_feet_look_left.jpg' className='photo' alt='Robbie Woolf' />
                <div className='about-body'>
                    <header>Hi. I’m Robbie</header>
                    <div className='body'>
                        <p>And I am a full stack web developer specializing in <span className='spotlight'>JavaScript</span>, <span className='spotlight'>React</span>, <span className='spotlight'>Node</span>, and <span className='spotlight'>CSS</span>. I have a passion for learning and increase my skills daily.</p>
                        <p>I offer a <span className='spotlight'>fresh perspective</span>! Outside of my technical competencies, my prior welding career gave me experience with detail-oriented builds, keeping client satisfaction a top priority, and managing large-scale projects with tight deadlines.</p>
                        <p>As an advocate for interpersonal community building and awesome websites, I would love to work with you in the future. <a href='#contact' className='cta'>Let's connect</a>!</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ) 
}