import React from 'react';
import { useState } from 'react';
import CardModule from '../modules/CardModule';
import styles from './CardDisplay.module.css';

const CardDisplay = (props) => {
  const [cards, setCards] = useState(CardModule.loadInitCards(props.level));
  const [cardsClicked, setcardsClicked] = useState([]);

  function clickHandler(id) {
    // If card has been selected, then game is over
    if (cardsClicked.includes(id)) {
      props.setGameActive(false);
      props.setGameOver(true);
      props.scoreDispatch({type: 'reset'});
      return;
    }
    setcardsClicked([...cardsClicked, id]);
    props.scoreDispatch({type: 'score'});
    setCards(CardModule.shuffleCards(cards));
    // Add logic if all cards have been clicked here below.
    if (cardsClicked.length === cards.length) {
      props.setGameWon(true);
      props.setGameActive(false);
      props.setGameOver(true);
      return;
    }
  }
  return (
  <div className={styles.wrapper}>
    {cards.map(card => (
      <div key={card.cardOrder} onClick={() => clickHandler(card.cardId)}>
        <img src={card.cardImageUrl} alt={`${card.cardName} Card`}/>
        <p>{card.cardName}</p>
      </div>))}
  </div>
  );
};

export default CardDisplay;
