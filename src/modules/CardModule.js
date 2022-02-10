import cardInfo from '../data/cards.json';

class CardModule {
  static loadInitCards(level) {
    let numofCards;
    if (level === 'easy') {
      numofCards = 4;
    } else if (level === 'medium') {
      numofCards = 8;
    } else if (level === 'hard') {
      numofCards = 16;
    } else if (level === 'expert') {
      numofCards = 22;
    }
    const cardsData = cardInfo.map(card => card).splice(0, numofCards);
    return cardsData;
  }

  static shuffleCards(cards) {
    let newCards = [...cards];
    newCards.sort(() => Math.random() - 0.5);
    return newCards;
  }
}

export default CardModule;