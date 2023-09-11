import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, image, description, date }) => {
  return (
      <div className='article'>
        <div className="article-card">
              <img src={image} alt={title} className="article-image" />
              <h2 className="article-title">{title}</h2>
              <p className="article-description">{description}</p>
              <p className="article-date">Publicado em {date}</p>
        </div>
        <div className="article-card">
              <img src={image} alt={title} className="article-image" />
              <h2 className="article-title">{title}</h2>
              <p className="article-description">{description}</p>
              <p className="article-date">Publicado em {date}</p>
        </div>
        <div className="article-card">
              <img src={image} alt={title} className="article-image" />
              <h2 className="article-title">{title}</h2>
              <p className="article-description">{description}</p>
              <p className="article-date">Publicado em {date}</p>
        </div>
      </div>

      
  );
};

export default ArticleCard;
