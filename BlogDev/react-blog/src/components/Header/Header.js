import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('usuarioID'); 
        localStorage.removeItem('accesso'); // Remove o token de autenticação
        navigate('/login'); // Redireciona o usuário para a página de login
    };
    return (
        <header className="site-header">
            <div className="header-content">
                <h1 className="site-title"><a href="/">Vidaembits</a></h1>
                <nav className="site-navigation">
                    <ul className={menuOpen ? 'menu' : 'menu hidden'}>
                        <li><Link to="/" >Início</Link></li>
                        <li><Link to="/article" href="/Artigos">article</Link></li>
                        <li><Link to="/login" href="/login">login</Link></li>
                        <li><Link to="/articleEdicao" href="/articleEdicao">article Edicao</Link></li>
                        <li><Link to="/login" onClick={handleLogout} className="logout-btn">Logout</Link></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={() => {
                    setMenuOpen(!menuOpen);
                
                }}>
                    &#9776;
                </div>
            </div>
        </header>
    );
}

export default Header;
