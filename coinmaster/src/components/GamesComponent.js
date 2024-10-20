import React from 'react';
import './GamesComponent.css';

const GamesComponent = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="games-card">
      <img src={imageSrc} alt="game visual" className="games-card-img" />
      <div className="games-card-content">
        <h3 className="games-card-title">{title}</h3>
        <p className="games-card-description">{description}</p>
        <button className="games-card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default GamesComponent;
