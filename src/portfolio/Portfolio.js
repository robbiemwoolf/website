export default function Portfolio() {
    return (
        <>
        <div className='card-group m-2'>
        <div className='card mx-2'>
            <div className='px-3 pt-3'>
                <h4 className='card-title special'>Restaurant Reservation System</h4>
                <a className='link-light' href='https://reservation-client-rw.herokuapp.com/dashboard' title='Live Site'><i className='bi bi-eye'></i></a>
                <a className='link-light' href='https://github.com/robbiemwoolf/restaurant-reservation' title='GitHub Repository'><i class='bi bi-github mx-2'></i></a>
            </div>
            <div className='m-2'>
                <img className='card-img-top rounded-4' src='images/reservation.png' alt='GrubDash Home' />
            </div>
            <div className='card-body'>
                <p className='card-text'>Full-stack application for restaurant personnel to create, update, view, and delete reservations, as well as seat them at various tables within the restaurant.</p>
                <p className='card-text'><small className='special'>Node | React | Express | Knex | Postgres | Bootstrap5 | JS | HTML | CSS | RESTful API</small></p>
            </div>
        </div>
        <div className='card mx-2'>
            <div className='px-3 pt-3'>
                <h4 className='card-title special'>We Love Movies</h4>
                <a className='link-light' href='https://we-love-movies-backend-rw.herokuapp.com/movies' title='Live Site'><i className='bi bi-eye'></i></a>
                <a className='link-light' href='https://github.com/robbiemwoolf/we-love-movies' title='GitHub Repository'><i class='bi bi-github mx-2'></i></a>
            </div>
          <div className='m-2'>
            <img className='card-img-top rounded-4' src='images/welovemovies.png' alt='We Love Movies Home' />
          </div>
          <div className='card-body'>
            <p className='card-text'>Thinkful project meant to practice building an API following RESTful design principles. Followed a inside-out development workflow.</p>
            <p className='card-text'><small className='special'>JS | Express | Knex | Jest | React </small></p>
          </div>
        </div>
      </div>
      <div className='card-group m-2 pb-4'>
        <div className='card mx-2'>
            <div className='px-3 pt-3'>
                <h4 className='card-title special'>Taskmaster</h4>
                <a className='link-light' href='https://taskmaster-client-rw.herokuapp.com/' title='Live Site'><i className='bi bi-eye'></i></a>
                <a className='link-light' href='https://github.com/robbiemwoolf/taskmaster' title='GitHub Repository'><i class='bi bi-github mx-2'></i></a>
            </div>
            <div className='m-2'>
                <img className='card-img-top rounded-4' src='images/taskmaster.png' alt='Taskmaster Home' />
            </div>
            <div className='card-body'>
                <p className='card-text'>This is a personal task tracker app with the key feature being the ability to see what tasks you completed on a given day, week, or month. Many people tend to focus on what they didn't do, but this app celebrates how much you do accomplish.</p>
                <p className='card-text'><small className='special'>JS | React | Express | Knex | Bootstrap | CSS</small></p>
            </div>
        </div>
        <div className='card mx-2'>
            <div className='px-3 pt-3'>
            <h4 className='card-title special'>Study Tool</h4>
                <a className='link-light' href='https://flashcard-project-ten.vercel.app/' title='Live Site'><i className='bi bi-eye'></i></a>
                <a className='link-light' href='https://github.com/robbiemwoolf/flashcard-project' title='GitHub Repository'><i class='bi bi-github mx-2'></i></a>
            </div>
            <div className='m-2'>
                <img className='card-img-top rounded-4' src='images/flashcardomatic.png' alt='Flashcard App Alert Home' />
            </div>
            <div className='card-body'>
                <p className='card-text'>Thinkful project meant to test React and API knowledge. This application allows users to create, edit, and delete decks and cards within them.</p>
                <p className='card-text'><small className='special'>JS | React | Express | Knex | Bootstrap</small></p>
            </div>
        </div>
        </div>
        </>
    ) 
}