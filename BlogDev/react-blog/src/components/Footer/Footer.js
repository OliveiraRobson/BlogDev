import React from 'react';
import './Footer.css';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as YoutubeIcon }  from '../../assets/icons/youtube-icon.svg';
const Footer = () => {
    return (
        <footer className="footer-container" aria-label="Main footer">
            <div className="footer-content">
                
                <div className="footer-section">
                    <h2 className="footer-title">Sobre VidaEmBits</h2>
                    <p>O Blog VidaEmBits é uma jornada pessoal e profissional pelas reflexões e insights de um programador apaixonado. Aos 26 anos e residente nos Estados Unidos, Robson tem dedicado oito anos à arte da programação, e através deste espaço, compartilha não só sua compreensão técnica, mas também suas meditações sobre o entrelaçado mundo financeiro e a força dos hábitos em nosso dia a dia. A cada post, você encontrará uma fusão de experiências pessoais, histórias inspiradoras e conhecimento técnico. Inspirado por sua própria jornada e pela constante evolução do universo da tecnologia, VidaEmBits tem como objetivo não apenas educar, mas também inspirar e conectar-se com outros entusiastas e curiosos.</p>
                </div>
                
                <nav className="footer-section" aria-label="Quick links">
                    <h2 className="footer-title">Acesso Rapido</h2>
                    <div className="footer-links">
                        <a href="/">Home</a>
                        <a href="/about">Sobre</a>
                        <a href="/services">Servico</a>
                        <a href="/contact">Contato</a>
                    </div>
                </nav>
                
                <div className="footer-section">
                    <h2 className="footer-title">Contato</h2>
                    <p>Email: Oliveira.robs@outlook.com</p>
             
                </div>
                <div className="footer-section">
                <h2 className="footer-title">Siga-me</h2>
                <div className="social-links">
                    <a href="https://www.facebook.com/BarbaSentinel" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
                    <a href="https://www.youtube.com/channel/UCpyIwfnpkfa05QclafBG_Bw" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><YoutubeIcon/></a>
                    <a href="https://www.instagram.com/oliveira.rbs/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                    {/* <a href="https://linkedin.com/in/YourProfile" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">🔗</a> */}
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
