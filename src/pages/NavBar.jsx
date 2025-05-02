import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-text">MiPortfolio</span>
        </Link>

        {/* Enlaces de navegación - versión desktop */}
        <div className="nav-links-desktop">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/about" className="nav-link">Sobre Mí</Link>
          <Link to="/projects" className="nav-link">Proyectos</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </div>

        {/* Botón de menú móvil */}
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={toggleMenu}>Inicio</Link>
          <Link to="/about" className="mobile-link" onClick={toggleMenu}>Sobre Mí</Link>
          <Link to="/projects" className="mobile-link" onClick={toggleMenu}>Proyectos</Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;