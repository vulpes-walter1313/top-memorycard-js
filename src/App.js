import './App.css';
import { useState } from 'react';
import { GameSetup } from './components/GameSetup';
import ScoreBoard from './components/ScoreBoard';
import CardDisplay from './components/CardDisplay';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [gameSettings, setGameSettings] = useState({level: 'easy', playerName:''});

  console.log(gameSettings);
  return (
    <div className="App">
      <h1>Memory card Game</h1>
      {
        gameActive ? <h1>Lets Play</h1> :
        <GameSetup settingsSetter={setGameSettings} setGameActive={setGameActive}/>
      }
      {
        gameActive ? <ScoreBoard currentScore={currentScore} bestScore={bestScore}/> :
        null
      }
      {
        gameActive ? <CardDisplay level={gameSettings.level}/> :
        null
      }
    </div>
  );
}

export default App;
