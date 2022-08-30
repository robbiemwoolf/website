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
            <p className='card-text'>Project meant to showcase ability to build a RESTful API with complex validation.</p>
            <p className='card-text'><small className='text-muted'>Thinkful Project</small></p>
          </div>
        </div>
        <div className='card'>
          <div className='m-4'>
            <img className='card-img-top rounded-4' src='images/welovemovies.png' alt='We Love Movies Home' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>We Love Movies</h5>
            <p className='card-text'>Practice building an API following RESTful design principles. Followed a inside-out development workflow.</p>
            <p className='card-text'><small className='text-muted'>Thinkful Project</small></p>
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
            <p className='card-text'>This is a personal task tracker app with the key feature being the ability to see what tasks you completed on a given day, week, or month. Many people tend to focus on what they didn't do, but this app celebrates how much you do accomplish.</p>
            <p className='card-text'><small className='text-muted'>Personal Project</small></p>
          </div>
        </div>
        <div className='card'>
          <div className='m-4'>
            <img className='card-img-top rounded-4' src='images/flashcardomatic.png' alt='Flashcard App Alert Home' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Study Tool</h5>
            <p className='card-text'>This application allows users to create, edit, and delete decks and cards within them.</p>
            <p className='card-text'><small className='text-muted'>Thinkful Project</small></p>
          </div>
        </div>
      </div>
      </>
    ) 
}