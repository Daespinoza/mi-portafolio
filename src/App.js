import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
            <p>Creado con React</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;