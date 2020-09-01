import React, { useState } from 'react';
import Stars from './Stars/index.jsx';
import ButtonGroup from '../../components/ButtonGroup/index.jsx';
import ButtonSwitch from '../../components/ButtonSwitch/index.jsx';
import styles from './styles.scss';

const valuesArray = [
  {
    key: 1,
    text: 'без',
  },
  {
    key: 2,
    text: 'с солями',
  },
  {
    key: 3,
    text: 'с гренками asd asd asd asdadwqer dsa',
  },
  {
    key: 4,
    text: 'с гренками',
  },
  {
    key: 5,
    text: 'с гренками',
  },
  {
    key: 6,
    text: 'с гренками',
  },
  {
    key: 7,
    text: 'с гренками',
  }
]

export default function() {

  const [mouseOverIndex, setMouseOver] = useState(null);

  const [rating, setRaitnig] = useState('');

  const [age, setInput] = useState('');
  const [currentValue, changeValue] = useState(valuesArray[0]);

  const handleChange = (pattern) => (event)=>{
    const match = event.target.value.match(new RegExp(pattern));

    if (match && +match[0] === +event.target.value) {
      setInput(event.target.value);
    }
    if (event.target.value=='' && event.target.setCustomValidity) {
      event.target.setCustomValidity('custom validate');
    } else {
      event.target.setCustomValidity('');
    }
  }

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Рейтинг меню: {rating}</h1>
      <h1 className={styles["title"]}>mouseOverIndex: {mouseOverIndex}</h1>
      <Stars
        mouseOverIndex={mouseOverIndex}
        setMouseOver={setMouseOver}
        setRaitnig={setRaitnig}
      />
      <div className={styles.control}>
        <ButtonGroup
          currentValue={currentValue}
          onChange={(value)=>{
            changeValue(value)
          }}
          theme="bordered wrap"
        >
          {valuesArray.map(value => (
            <ButtonSwitch
              key={value.key}
              value={value}
              theme='green-wrap'
            >
              <span>
                {value.text}
              </span>
            </ButtonSwitch>
          ))}
        </ButtonGroup>
      </div>
      <form>
        <input
          id="username"
          required
          type="text"
          placeholder="Enter age"
          onChange={handleChange("[0-9.]*")}
          value={age}
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