import React from 'react';
import './Card.css';

const Card: React.FC<ICard> = ({ title, text, imgUrl, link }) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
      <p className="card-learn-more" onClick={() => window.open(link, '_blank')}>Learn More</p>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default Card;

interface ICard {
  title: string;
  text: string;
  imgUrl: string;
  link: string;
}
