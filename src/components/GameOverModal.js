import React from 'react';

const GameOverModal = (props) => {
  return (
  <div className='game-over-modal'>
    {
      props.gameWon ? 
      <p>You Won! You got {props.lastScore} out of {props.lastScore}</p> :
      <p>Game over! Your score was {props.lastScore} with {props.bestScore} being the best score so far</p>
    }
  </div>
  );
};

export default GameOverModal;
