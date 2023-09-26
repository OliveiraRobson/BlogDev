import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container" aria-label="Main footer">
            <div className="footer-content">
                
                <div className="footer-section">
                    <h2 className="footer-title">About Us</h2>
                    <p>We are a team of passionate developers and designers dedicated to creating the best web experiences.</p>
                </div>
                
                <nav className="footer-section" aria-label="Quick links">
                    <h2 className="footer-title">Quick Links</h2>
                    <div className="footer-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact</a>
                    </div>
                </nav>
                
                <div className="footer-section">
                    <h2 className="footer-title">Contact</h2>
                    <p>Email: support@example.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>
                <div className="footer-section">
                <h2 className="footer-title">Follow Us</h2>
                <div className="social-links">
                    <a href="https://www.facebook.com/BarbaSentinel" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">🔵</a>
                    <a href="https://www.youtube.com/channel/UCpyIwfnpkfa05QclafBG_Bw" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🔷</a>
                    <a href="https://www.instagram.com/oliveira.rbs/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">⭕</a>
                    <a href="https://linkedin.com/in/YourProfile" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">🔗</a>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
