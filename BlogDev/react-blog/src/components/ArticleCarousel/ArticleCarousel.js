import React from 'react';
import Slider from 'react-slick';
import './ArticleCarousel.css';

const ArticleCarousel = ({ articles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="article-carousel">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div className="article-cardcarousel" key={index}>
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleCarousel;
