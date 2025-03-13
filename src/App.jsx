import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';


function App() {

  return (
    <>
      <Router>
        <Header />
        <main className="container-fluid min-vh-100 p-0 d-flex justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
