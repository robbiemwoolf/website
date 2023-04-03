import './App.css'
import Header from './header/Header'
import Tech from './technologies/Tech'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
import Footer from './footer/Footer'
import Contact from './contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Tech />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App