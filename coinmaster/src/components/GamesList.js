import React from 'react';
import GamesComponent from './GamesComponent';

const GameList = () => {
  const gameData = {
    imageSrc: '/path/to/your/image.png', // Replace with the actual path to the image
    title: 'BudgetBoss',
    description: 'Players manage a virtual budget to cover expenses like rent, groceries, utilities, etc. They make decisions on spending and saving to stay within their budget.',
    buttonText: 'Play Now',
  };

  return (
    <div>
      <GamesComponent 
        imageSrc={gameData.imageSrc}
        title={gameData.title}
        description={gameData.description}
        buttonText={gameData.buttonText}
      />
    </div>
  );
};

export default GameList;
