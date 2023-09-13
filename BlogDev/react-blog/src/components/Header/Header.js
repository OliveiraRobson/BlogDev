import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-content">
                <h1 className="site-title"><a href="/">Nome do Seu Site</a></h1>
                <nav className="site-navigation">
                    <ul className={menuOpen ? 'menu' : 'menu hidden'}>
                        <li><Link to="/" >Início</Link></li>
                        <li><Link to="/article" href="/Artigos">article</Link></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>
            </div>
        </header>
    );
}

export default Header;
