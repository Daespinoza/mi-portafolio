import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/components/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {year} Tu Nombre. Todos los derechos reservados.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:tu-email@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;