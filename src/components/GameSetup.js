import React from 'react';
import { useState } from 'react';
import styles from './GameSetup.module.css';

export const GameSetup = (props) => {
  const [level, setLevel] = useState('easy');

  function levelChange(e) {
    setLevel(e.target.value);
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    props.settingsSetter({level});
    props.setGameActive(true);
    props.setGameOver(false);
    props.setGameWon(false);
    props.scoreDispatch({type: 'reset'});
  }
  return (
    <div className={styles.wrapper}>
      <form onSubmit={formSubmitHandler}>
        <div className='level-input-group' onChange={levelChange}>
          <p>Difficulty level?</p>
          <div className={styles.inputpair}>
            <input type="radio" id='easy' name='level' value='easy'/>
            <label htmlFor='easy'>Easy</label>
          </div>
          <div className={styles.inputpair}>
            <input type="radio" id='medium' name='level' value='medium'/>
            <label htmlFor='medium'>Medium</label>
          </div>
          <div className={styles.inputpair}>
            <input type="radio" id='hard' name='level' value='hard'/>
            <label htmlFor='hard'>Hard</label>
          </div>
          <div className={styles.inputpair}>
            <input type="radio" id='expert' name='level' value='expert'/>
            <label htmlFor='expert'>Expert</label>
          </div>
        </div>
        <input type='submit' value='Start'/>
      </form>
    </div>
  );
};
