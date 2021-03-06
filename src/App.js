import './App.css';
import { useState, useReducer } from 'react';
import { GameSetup } from './components/GameSetup';
import ScoreBoard from './components/ScoreBoard';
import CardDisplay from './components/CardDisplay';
import GameOverModal from './components/GameOverModal';

const scoreInitState = {
  currentScore: 0,
  bestScore: 0,
  lastScore: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'score':
      const newScore = state.currentScore + 1;
      let newBestScore;
      if (newScore > state.bestScore) {
        newBestScore = newScore;
      } else {
        newBestScore = state.bestScore
      }
      return { currentScore: newScore, bestScore: newBestScore, lastScore: newScore};
    case 'reset':
      return { currentScore: 0, bestScore: state.bestScore, lastScore: state.currentScore};
    default:
      return state;
  }
}

function App() {
  const [scoreData, scoreDispatch] = useReducer(reducer, scoreInitState);
  const [gameWon, setGameWon] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameSettings, setGameSettings] = useState({level: 'easy'});
  const [endGameModal, setEndGameModal] = useState(false);

  console.log(gameSettings, gameActive);
  return (
    <div className="App">
      <header>
        <h1>Tarot Memory Game</h1>
        {
          gameActive && !gameOver ? <h1>Lets Play</h1> :
          <GameSetup
            settingsSetter={setGameSettings}
            setGameActive={setGameActive}
            setGameOver={setGameOver}
            setGameWon={setGameWon}
            scoreDispatch={scoreDispatch}
            />
        }
        <ScoreBoard currentScore={scoreData.currentScore} bestScore={scoreData.bestScore}/>
      </header>
      {
        gameActive ? <CardDisplay
          level={gameSettings.level}
          setGameActive={setGameActive}
          setGameOver={setGameOver}
          setGameWon={setGameWon}
          scoreDispatch={scoreDispatch}
          setEndGameModal={setEndGameModal}/> :
        null
      }
      {
        endGameModal ? <GameOverModal
          gameWon={gameWon}
          lastScore={scoreData.lastScore}
          bestScore={scoreData.bestScore}
          setEndGameModal={setEndGameModal}/> : null
      }
    </div>
  );
}

export default App;
