import React from 'react';
import './SocialBar.css';

const SocialBar = () => {
    return (
        <div className="social-bar">
            <a href="https://facebook.com/YourPage" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">🔵</a>
            <a href="https://twitter.com/YourHandle" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🔷</a>
            <a href="https://instagram.com/YourHandle" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">⭕</a>
            <a href="https://linkedin.com/in/YourProfile" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">🔗</a>
        </div>
    );
}

export default SocialBar;
