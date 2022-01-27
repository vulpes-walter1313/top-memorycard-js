import React from 'react';
import { useState } from 'react';
import CardModule from '../modules/CardModule';

const CardDisplay = (props) => {
  const [cards, setCards] = useState(CardModule.loadInitCards(props.level));

  return (
  <div className='card-display-wrapper'>
    {cards.map(card => (
      <div key={card.cardOrder}>
        <img src={card.cardImageUrl}/>
        <p>{card.cardName}</p>
      </div>))}
  </div>
  );
};

export default CardDisplay;
