import ProjectCard from "./ProjectCard"

export default function Portfolio() {
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
        {
            title: 'We Love Movies',
            site: 'https://we-love-movies-rw.vercel.app/',
            github: 'https://github.com/robbiemwoolf/we-love-movies',
            img: 'images/welovemovies.png',
            alt: 'We Love Movies Home',
            description: 'Thinkful project meant to practice building an API following RESTful design principles. Followed a inside-out development workflow.',
            tools: 'JS | Express | Knex | Jest | React'
        }
    ]

    const projects2 = [
        {
            title: 'Taskmaster',
            site: 'https://taskmaster-rw.vercel.app/',
            gitHub: 'https://github.com/robbiemwoolf/taskmaster', 
            img: 'images/taskmaster.png',
            alt: 'Taskmaster Home',
            description: `This is a personal task tracker app with the key feature being the ability to see what tasks you completed on a given day, week, or month. Many people tend to focus on what they didn't do, but this app celebrates how much you do accomplish.`,
            tools: 'JS | React | Express | Knex | Bootstrap | CSS'
        },
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
    
    const info = projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />
    })

    const info2 = projects2.map((project) => {
        return <ProjectCard key={project.title} project={project} />
    })

    return (
        <>
        <div className='card-group m-2'>
        {info}
        </div>
        <div className='card-group m-2 pb-4'>
        {info2}
        </div>
        </>
    ) 
}