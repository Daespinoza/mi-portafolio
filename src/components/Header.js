import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Tu Nombre
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : '')}>
                Sobre Mí
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({isActive}) => (isActive ? 'active' : '')}>
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : '')}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;