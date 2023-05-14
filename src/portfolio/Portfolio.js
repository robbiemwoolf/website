import ProjectCard from "./ProjectCard";
import ByteCard from "./ByteCard";

export default function Portfolio() {

    const projects = [
        { 
            title: 'Reservation System',
            site: 'https://restaurant-reservatoin-rw-client.onrender.com',
            github: 'https://github.com/robbiemwoolf/restaurant-reservation',
            img: 'images/reservation.png',
            alt: 'GrubDash Home',
            description: 'Full-stack application for restaurant personnel to create, update, view, and delete reservations, as well as seat them at various tables within the restaurant.',
            tools: 'Node | React | Express | PostgreSQL | JS | RESTful API | CSS'
        },
        {
            title: 'Taskmaster',
            site: 'https://taskmaster-rw.vercel.app',
            github: 'https://github.com/robbiemwoolf/taskmaster', 
            img: 'images/taskmaster.png',
            alt: 'Taskmaster Home',
            description: `This is a personal task tracker app with the key feature being the ability to see what tasks you completed on a given day, week, or month. Many people tend to focus on what they didn't do, but this app celebrates how much you do accomplish.`,
            tools: 'JS | React | Express | Knex | CSS'
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
        // {
        //     title: 'Study Tool',
        //     site: 'https://flashcard-project-ten.vercel.app/',
        //     github: 'https://github.com/robbiemwoolf/flashcard-project',
        //     img: 'images/flashcardomatic.png',
        //     alt: 'Flashcard App Alert Home',
        //     description: 'Thinkful project meant to test React and API knowledge. This application allows users to create, edit, and delete decks and cards within them.',
        //     tools: 'JS | React | Express | Knex | Bootstrap'
        // }
    ]

    const bytes = [
        // { 
        //     title: 'Metronome',
        //     site: '',
        //     github: 'https://github.com/robbiemwoolf/guitar-groove',
        //     img: 'images/metronome.png',
        //     alt: 'metronome screenshot',
        //     description: 'This metronome is the first feature in my guitar application that I will be using to become a better web developer and guitar player. Highlight of this project is finally creating my own custom JavaScript toolchain. No more hours will be wasted sifting through all the deprecations that come with that simple command, `create-react-app`.',
        //     tools: ''
        // },
        // { 
        //     title: 'Spine Chasers',
        //     site: '',
        //     github: 'https://github.com/robbiemwoolf/spine-chasers',
        //     img: '',//'images/spinechasers.png',
        //     alt: 'spine chasers screenshot',
        //     description: 'All book lovers hit the phase where they are buying more books than they are reading. This application provides a new way to manage and interact with your physical library. Browse your library quickly and efficiently; seeing covers, descriptions, and ratings at a glance in the same way we have gotten accustomed to viewing shows and movies on Netflix.',
        //     tools: 'JS | Express | Knex | Jest'
        // },
        { 
            title: 'Your Challenge',
            site: 'seven5hard.onrender.com',
            github: 'https://github.com/robbiemwoolf/yourchallenge',
            img: '',//'images/yourchallenge.png',
            alt: 'your challenge screenshot',
            description: 'A project meant to help track six daily rules as you increase your daily streak. This application is early in production and only include the default challenge rules set forth in Andy Frisella\'s 75 Hard Challenge. Soon there will be multiple challenge options as well as the ability to create and store custom challenges. Currently using the browser\'s local storage for state management.',
            tools: 'JS | Express | Knex | Jest'
        },
        {
            title: 'Twisty',
            site: 'https://twisty.vercel.app',
            github: 'https://github.com/robbiemwoolf/twisty', 
            img: 'images/twisty.png',
            alt: 'Twisty screenshot',
            description: `A simple spinner application meant to be used with the classic Twister play mat. I used an infinite animation loop that upon clicking the spinner a random CSS class is chosen and added to the targeted element in order to stop the animation, display a color, and display a body part. After two and half seconds has elapsed the CSS class will be removed and the animation will restart.`,
            tools: 'JS | CSS | React | Vercel'
        }
    ]
    
    const projectCards = projects.map((card) => {
        return <ProjectCard key={card.title} card={card} />
    })

    const smallBytes = bytes.map((card) => {
        return <ByteCard key={card.title} card={card} />
    })

    return (
        <div className='portfolio'>
            <div className='projects' name='portfolio' id='portfolio' >
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