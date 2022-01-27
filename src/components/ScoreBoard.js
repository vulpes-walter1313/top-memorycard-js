import React from 'react';

const ScoreBoard = (props) => {
  return (
  <div className='score-board'>
    <h2>Score Board:</h2>
    <p>Score: {props.currentScore}</p>
    <p>Best Score: {props.bestScore}</p>
  </div>
  );
};

export default ScoreBoard;
