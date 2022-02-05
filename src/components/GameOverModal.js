import React from 'react';
import styles from './GameOverModal.module.css';

const GameOverModal = (props) => {
  const { setEndGameModal } = props;

  return (
  <div className={styles.wrapper} onClick={() => setEndGameModal(false)}>
    <div className={styles.content}>
      {
        props.gameWon ? 
        <p>You Won! You got {props.lastScore} out of {props.lastScore}</p> :
        <p>Game over! Your score was {props.lastScore} with {props.bestScore} being the best score so far</p>
      }
    </div>
  </div>
  );
};

export default GameOverModal;
