import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card: React.FC<ICard> = ({ title, text, imgUrl, link }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(link)}>
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
      <p className="card-learn-more">
        Learn More
      </p>
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
