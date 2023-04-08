import { useState, useEffect } from 'react'
import './App.css'
import Header from './header/Header'
import Tech from './technologies/Tech'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
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
    <div className="App">
      <Header />
      <div className={(offset > 0) ? 'content' : 'null'}>
        <Tech />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}

export default App