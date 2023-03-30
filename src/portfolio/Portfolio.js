import ProjectCard from "./ProjectCard";
import ByteCard from "./ByteCard";

export default function Portfolio() {
    // const js = <img src='images/tech-logos/JavaScript-logo.png' className='tech-logo neonImg glow' alt='JavaScript' ></img>
    // const react = <img src='images/tech-logos/react-logo.png' className='tech-logo' alt='React' ></img>
    // const node = <img src='images/tech-logos/node-logo.png' className='tech-logo' alt='NodeJS' ></img>
    // const express = <img src='images/tech-logos/express-logo.png' className='tech-logo' alt='Express' ></img>
    // const npm = <img src='images/tech-logos/npm-logo.png' className='tech-logo' alt='npm' ></img>
    // const postgreSQL = <img src='images/tech-logos/PostgreSQL-logo.png' className='tech-logo' alt='PostgreSQL' ></img>
    // const git = <img src='images/tech-logos/git-logo.png' className='tech-logo' alt='Git' ></img>
    // const jQuery = <img src='images/tech-logos/jQuery-logo.png' className='tech-logo' alt='jQuery' ></img>
    // const HTML = <img src='images/tech-logos/html-logo.png' className='tech-logo' alt='HTML' ></img>
    // const CSS = <img src='images/tech-logos/css-logo.jpg' className='tech-logo' alt='CSS' ></img>
    const projects = [
        { 
            title: 'Restaurant Reservation System',
            site: 'https://reservation-client-rw.herokuapp.com/dashboard',
            github: 'https://github.com/robbiemwoolf/restaurant-reservation',
            img: 'images/reservation.png',
            alt: 'GrubDash Home',
            description: 'Full-stack application for restaurant personnel to create, update, view, and delete reservations, as well as seat them at various tables within the restaurant.',
            tools: 'Node | React | Express | Knex | Postgres | Bootstrap5 | JS | HTML | CSS | RESTful API'
        },
        // {
        //     title: 'We Love Movies',
        //     site: 'https://we-love-movies-rw.vercel.app',
        //     github: 'https://github.com/robbiemwoolf/we-love-movies',
        //     img: 'images/welovemovies.png',
        //     alt: 'We Love Movies Home',
        //     description: 'Thinkful project meant to practice building an API following RESTful design principles. Followed a inside-out development workflow.',
        //     tools: 'JS | Express | Knex | Jest | React'
        // },
        {
            title: 'Study Tool',
            site: 'https://flashcard-project-ten.vercel.app/',
            gitHub: 'https://github.com/robbiemwoolf/flashcard-project',
            img: 'images/flashcardomatic.png',
            alt: 'Flashcard App Alert Home',
            description: 'Thinkful project meant to test React and API knowledge. This application allows users to create, edit, and delete decks and cards within them.',
            tools: 'JS | React | Express | Knex | Bootstrap'
        }
    ]

    const bytes = [
        { 
            title: 'Metronome',
            site: '',
            github: 'https://github.com/robbiemwoolf/guitar-groove',
            img: 'images/metronome.png',
            alt: 'metronome screenshot',
            description: 'This metronome is the first feature in my guitar application that I will be using to become a better web developer and guitar player. Highlight of this project is finally creating my own custom JavaScript toolchain. No more hours will be wasted sifting through all the deprecations that come with that simple command, `create-react-app`.',
            tools: ''
        },
        {
            title: 'Taskmaster',
            site: 'https://taskmaster-rw.vercel.app',
            gitHub: 'https://github.com/robbiemwoolf/taskmaster', 
            img: 'images/taskmaster.png',
            alt: 'Taskmaster Home',
            description: `This is a personal task tracker app with the key feature being the ability to see what tasks you completed on a given day, week, or month. Many people tend to focus on what they didn't do, but this app celebrates how much you do accomplish.`,
            tools: ''//'JS | React | Express | Knex | Bootstrap | CSS'
        },
        // {
        //     title: 'Twisty',
        //     site: '',
        //     gitHub: 'https://github.com/robbiemwoolf/twisty', 
        //     img: 'images/twisty.png',
        //     alt: 'Twisty screenshot',
        //     description: `A simple spinner application meant to be used with the classic Twister play mat. I used an infinite animation loop that pauses on hover to determine the color and body part.`,
        //     tools: ''//'JS | React | CSS'
        // }
    ]
    
    const projectCards = projects.map((card) => {
        return <ProjectCard key={card.title} card={card} />
    })

    const smallBytes = bytes.map((card) => {
        return <ByteCard key={card.title} card={card} />
    })

    return (
        <div className='portfolio'>
            <div className='projects'>
                <header>Projects</header>
                {projectCards}
            </div>
            <div className='small-bytes'>
                <header>Small Bytes</header>
                {smallBytes}
            </div>
        </div>
    ) 
}