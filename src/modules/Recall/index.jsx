import React, { useState, useRef } from 'react';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import Stars from './Stars/index.jsx';
import ButtonGroup from '../../components/ButtonGroup/index.jsx';
import ButtonSwitch from '../../components/ButtonSwitch/index.jsx';
import Form from './Form/index.jsx';
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

  let inputEl = useRef(null);

  const [mouseOverIndex, setMouseOver] = useState(null);

  const [rating, setRaitnig] = useState('');

  const [age, setInput] = useState('');
  const [currentValue, changeValue] = useState(valuesArray[0]);

  const handleChange = (pattern) => () => {
    const input = get(inputEl, 'current')
    const value = get(inputEl, ['current', 'value']);
    const match = value.match(new RegExp(pattern));

    if (match && +match[0] === +value) {
      setInput(value);
    }

    if (value=='' && input.setCustomValidity) {
      input.setCustomValidity('custom validate');
    } else {
      input.setCustomValidity('');
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
      <Form
        onChange={debounce(handleChange("[0-9.]*"), 1000)}
        value={age}
        inputEl={inputEl}
      />
    </div>
  );
}