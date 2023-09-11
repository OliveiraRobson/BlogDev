import React, { useState } from 'react';
import './Header.css';
// ... (código anterior)

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    return (
      <header className="header">
        <div className="logo">
          <h1>BRS</h1>
        </div>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href="#" onClick={closeMenu}>Produtos</a></li>
            <li><a href="#" onClick={closeMenu}>Contato</a></li>
            <li><a href="#" onClick={closeMenu}>Login</a></li>
          </ul>
        </nav>
        <div className="mobile-menu" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
      </header>
    );
  };
  
  export default Header;
  