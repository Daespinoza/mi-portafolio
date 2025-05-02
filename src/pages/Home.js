import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import '../styles/pages/Home.css';
// Importar tu foto cuando la tengas
// import profilePic from '../assets/profile-pic.jpg';

function Home() {
  return (
    <section className="home-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image">
            {/* Cuando tengas una foto, reemplaza el div por: */}
            {/* <img src={profilePic} alt="Tu Nombre" /> */}
            <div className="profile-placeholder">
              <FaCode />
            </div>
          </div>
          
          <div className="hero-text">
            <h1>Tu Nombre Completo</h1>
            <p className="tagline">Desarrollador web con experiencia en React y ASP.NET, disponible para nuevos proyectos.</p>
            
            <p className="intro-text">
              Apasionado por crear soluciones web modernas y eficientes. 
              Me especializo en el desarrollo frontend con React y backend con ASP.NET, 
              siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.
            </p>
            
            <div className="hero-links">
              <Link to="/about" className="btn btn-primary">
                Conóceme
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                Ver Proyectos
              </Link>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;