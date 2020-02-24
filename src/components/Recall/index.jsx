import React, { PureComponent, useState } from 'react';
import styles from './styles.css';

export default Recall = function() {

  const [mouseOverIndex, setMouseOver] = useState(null);

  const [rating, setRaitnig] = useState('');

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Рейтинг меню: {rating}</h1>
      <h1 className={styles["title"]}>mouseOverIndex: {mouseOverIndex}</h1>
      <div>
        <div className={styles["stars"]}>
          {[5, 4, 3, 2, 1].map(index => {
            let filled = index <= mouseOverIndex ? styles['star-filled'] : '';

            return (
            <div
                key={index}
                onMouseLeave={()=> {setMouseOver(null)}}
                onMouseEnter={()=> {setMouseOver(index)}}
                className={styles['star'] + ' ' +filled}
                onClick={()=> {setRaitnig(index)}}
              />
            )}
          )}
        </div>
      </div>
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
        <input type='submit'/>
      </form>
    </div>
  );
}