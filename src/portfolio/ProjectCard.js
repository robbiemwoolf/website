export default function ProjectCard({project}) {
    return (
        <>
         <div className='card mx-2'>
            <div className='px-3 pt-3'>
                <h4 className='card-title special'>{project.title}</h4>
                <a className='link-light' href={project.site} title='Live Site'><i className='bi bi-eye'></i></a>
                <a className='link-light' href={project.github} title='GitHub Repository'><i className='bi bi-github mx-2'></i></a>
            </div>
            <div className='m-2'>
                <img className='card-img-top rounded-4' src={project.img} alt={project.alt} />
            </div>
            <div className='card-body'>
                <p className='card-text'>{project.description}</p>
                <p className='card-text'><small className='special'>{project.tools}</small></p>
            </div>
        </div>
        </>
    )
}