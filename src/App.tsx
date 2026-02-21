import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
