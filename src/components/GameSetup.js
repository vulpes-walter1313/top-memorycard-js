import React from 'react';
import { useState } from 'react';

export const GameSetup = (props) => {
  const [playerName, setPlayerName] = useState('');
  const [level, setLevel] = useState('easy');

  function playerNameChange(e) {
    setPlayerName(e.target.value);
  }
  function levelChange(e) {
    setLevel(e.target.value);
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    props.settingsSetter({level, playerName});
    props.setGameActive(true);
  }
  return (
    <div className='game-setup-modal'>
      <form onSubmit={formSubmitHandler}>
        <div className='name-input-group'>
          <label htmlFor='name'>What is your name?</label>
          <input type='text' name='name' id='name' value={playerName} onChange={playerNameChange}/>
        </div>
        <div className='level-input-group' onChange={levelChange}>
          <p>Difficulty level?</p>
          <div>
            <input type="radio" id='easy' name='level' value='easy'/>
            <label htmlFor='easy'>Easy</label>
          </div>
          <div>
            <input type="radio" id='medium' name='level' value='medium'/>
            <label htmlFor='medium'>Medium</label>
          </div>
          <div>
            <input type="radio" id='hard' name='level' value='hard'/>
            <label htmlFor='hard'>Hard</label>
          </div>
          <div>
            <input type="radio" id='expert' name='level' value='expert'/>
            <label htmlFor='expert'>Expert</label>
          </div>
        </div>
        <input type='submit' value='Start'/>
      </form>
    </div>
  );
};
