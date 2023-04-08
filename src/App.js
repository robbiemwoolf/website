import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './header/Header'
import Home from './home/Home'
import Resume from './resume/Resume'
import Footer from './footer/Footer'


function App() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)

        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

  return (
    <Router>
    <div className="App">
            <Header />
            <div className={(offset > 0) ? 'content' : 'null'}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/resume' element={<Resume />} /> 
                </Routes>
            </div>
        <Footer />
    </div>
    </Router>
  )
}

export default App