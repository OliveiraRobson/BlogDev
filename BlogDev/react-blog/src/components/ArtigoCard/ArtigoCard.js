import React from 'react';
import './ArtigoCard.css';

const ArtigoCard = ({ title, author, date, image, category }) => {
    return (
        <div className="artigo-card">
            <div className="artigo-image-overlay"></div>
            <img src={image} alt={title} className="artigo-image" />
            <div className="artigo-content">
                <h3 className="artigo-title">{title}</h3>
                <span className="artigo-category">{category}</span>
                <p className="artigo-author">
                    <i className="icon-user"></i>
                    {author}
                </p>
                <p className="artigo-date">
                    <i className="icon-calendar"></i>
                    {date}
                </p>
            </div>
        </div>
    );
}

export default ArtigoCard;
