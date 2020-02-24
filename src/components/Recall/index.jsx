import React, { PureComponent, useState } from 'react';
import styles from './styles.css';

const funcComponent = function() {

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

export class Recall extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mouseOverIndex: null,
      rating: '',
    };
    this.setMouseOver = this.setMouseOver.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  setMouseOver(mouseOverIndex) {
    console.warn('asdasd');
    this.setState((state)=>({
      state: state.rating,
      mouseOverIndex,
    }));
  }

  handleStarClick(rating) {
    this.setState((state)=>({
      mouseOverIndex: state.mouseOverIndex,
      rating,
    }));
  }

  render() {
    const { mouseOverIndex, rating } = this.state;
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
                  onMouseLeave={()=> {this.setMouseOver(null)}}
                  onMouseEnter={()=> {this.setMouseOver(index)}}
                  className={styles['star'] + ' ' +filled}
                  onClick={()=> {this.handleStarClick(index)}}
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
}

export default Recall;