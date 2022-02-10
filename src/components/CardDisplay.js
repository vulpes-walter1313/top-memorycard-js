import React from 'react';
import { useState, useEffect } from 'react';
import CardModule from '../modules/CardModule';
import styles from './CardDisplay.module.css';

const CardDisplay = (props) => {
  const [cards, setCards] = useState(CardModule.loadInitCards(props.level));
  const [cardsClicked, setcardsClicked] = useState([]);
  const { setGameActive, setGameWon, setGameOver, scoreDispatch, setEndGameModal } = props;

  function clickHandler(id) {
    // If card has been selected, then game is over
    if (cardsClicked.includes(id)) {
      setGameActive(false);
      setGameOver(true);
      scoreDispatch({type: 'reset'});
      setEndGameModal(true);
      setcardsClicked([]);
      return;
    }
    setcardsClicked([...cardsClicked, id]);
    props.scoreDispatch({type: 'score'});
    setCards(CardModule.shuffleCards(cards));
  }
  
  // useEffect to check if game has been won
  useEffect(() => {
    console.log("CArds UseEffect Triggered");
    if (cardsClicked.length === cards.length) {
      setGameWon(true);
      setGameActive(false);
      setGameOver(true);
      setEndGameModal(true);
      setcardsClicked([]);
    }
  }, [cardsClicked, setGameWon, setGameActive, setGameOver, setEndGameModal, cards]);

  return (
  <div className={styles.wrapper}>
    {cards.map(card => (
      <div key={card.cardId} onClick={() => clickHandler(card.cardId)}>
        <img src={card.cardImageUrl} alt={`${card.cardName} Card`}/>
        <p>{card.cardName}</p>
      </div>))}
  </div>
  );
};

export default CardDisplay;
