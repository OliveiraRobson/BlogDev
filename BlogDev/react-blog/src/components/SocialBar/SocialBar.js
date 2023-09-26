import React from 'react';
import './SocialBar.css';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as YoutubeIcon }  from '../../assets/icons/youtube-icon.svg';



const SocialBar = () => {
    return (
        <div className="social-bar">
            <a href="https://www.facebook.com/BarbaSentinel" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
            <a href="https://www.youtube.com/channel/UCpyIwfnpkfa05QclafBG_Bw" className="social-icon" aria-label="Youtube" target="_blank" rel="noopener noreferrer"><YoutubeIcon/></a>
            <a href="https://www.instagram.com/oliveira.rbs/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>            {/* <a href="https://linkedin.com/in/YourProfile" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">🔗</a> */}
        </div>
    );
}

export default SocialBar;
