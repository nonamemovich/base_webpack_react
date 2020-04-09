import React, { useState } from 'react';
import Stars from './Stars/index.jsx';
import styles from './styles.scss';

export default function() {

  const [mouseOverIndex, setMouseOver] = useState(null);

  const [rating, setRaitnig] = useState('');

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Рейтинг меню: {rating}</h1>
      <h1 className={styles["title"]}>mouseOverIndex: {mouseOverIndex}</h1>
      <Stars
        mouseOverIndex={mouseOverIndex}
        setMouseOver={setMouseOver}
        setRaitnig={setRaitnig}
      />
      <form>
        <input
          type="text"
          id="username"
          required
          placeholder="Enter Name"
          onChange={ (event)=>{
            console.warn(event.target.setCustomValidity);

            if (event.target.value=='' && event.target.setCustomValidity) {
              event.target.setCustomValidity('custom validate');
            } else {
              event.target.setCustomValidity('');
            }
          }}
        />
        <div className={styles.crop}>
            <img src="http://localhost:3001/src/public/1.jpg" />
        </div>
        <div className={styles.crop}>
            <img src="http://localhost:3001/src/public/2.jpg" />
        </div>
        <input type='submit'/>
      </form>
    </div>
  );
}