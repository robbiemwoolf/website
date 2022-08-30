export default function Portfolio() {
    return (
        <>
        <div className='card-group'>
        <div className='card'>
          <div className='m-4'>
           <img className='card-img-top rounded-4' src='images/grubdash.png' alt='GrubDash Home' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>GrubDash Backend</h5>
            <a className='' href='https://grubdash-backend-rw.herokuapp.com/dishes'><i className='bi bi-eye'></i></a>
            <a className='' href='https://github.com/robbiemwoolf/grubdash'><i class='bi bi-github mx-2'></i></a>
            <p className='card-text'>Thinkful project meant to showcase ability to build a RESTful API with complex validation.</p>
            <p className='card-text'><small className=''>JS | React | Express | Knex | HTML | CSS</small></p>
          </div>
        </div>
        <div className='card'>
          <div className='m-4'>
            <img className='card-img-top rounded-4' src='images/welovemovies.png' alt='We Love Movies Home' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>We Love Movies</h5>
            <a className='' href='https://we-love-movies-backend-rw.herokuapp.com/movies'><i className='bi bi-eye'></i></a>
            <a className='' href='https://github.com/robbiemwoolf/we-love-movies'><i class='bi bi-github mx-2'></i></a>
            <p className='card-text'>Thinkful project meant to practice building an API following RESTful design principles. Followed a inside-out development workflow.</p>
            <p className='card-text'><small className=''>JS | Express | Knex | Jest | React</small></p>
          </div>
        </div>
      </div>
      <div className='card-group'>
        <div className='card'>
          <div className='m-4'>
            <img className='card-img-top rounded-4' src='images/taskmaster.png' alt='Taskmaster Home' />
          </div>
          <div className='card-body'>
            <h5 className='card-title rounded-4'>Taskmaster</h5>
            <a className='' href='https://taskmaster-client-rw.herokuapp.com/'><i className='bi bi-eye'></i></a>
            <a className='' href='https://github.com/robbiemwoolf/taskmaster'><i class='bi bi-github mx-2'></i></a>
            <p className='card-text'>This is a personal task tracker app with the key feature being the ability to see what tasks you completed on a given day, week, or month. Many people tend to focus on what they didn't do, but this app celebrates how much you do accomplish.</p>
            <p className='card-text'><small className=''>JS | React | Express | Knex | Bootstrap | CSS</small></p>
          </div>
        </div>
        <div className='card'>
          <div className='m-4'>
            <img className='card-img-top rounded-4' src='images/flashcardomatic.png' alt='Flashcard App Alert Home' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Study Tool</h5>
            <a className='' href='https://flashcard-project-ten.vercel.app/' ><i className='bi bi-eye'></i></a>
            <a className='' href='https://github.com/robbiemwoolf/flashcard-project'><i class='bi bi-github mx-2'></i></a>
            <p className='card-text'>Thinkful project meant to test React and API knowledge. This application allows users to create, edit, and delete decks and cards within them.</p>
            <p className='card-text'><small className=''>JS | React | Express | Knex | Bootstrap</small></p>
          </div>
        </div>
      </div>
      </>
    ) 
}