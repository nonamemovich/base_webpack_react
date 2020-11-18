import React from 'react';
import styles from '../styles.scss';

export const Stars = function(props) {
  const {
    mouseOverIndex,
    setMouseOver,
    setRaitnig,
  } = props;

  const renderStar = ({
    index,
    setMouseOver,
    setRaitnig,
    filled,
  }) => (
    <div
      key={index}
      onMouseLeave={()=> {setMouseOver(null)}}
      onMouseEnter={()=> {setMouseOver(index)}}
      className={styles['star'] + ' ' +filled}
      onClick={()=> {setRaitnig(index)}}
    />
  )

  return (
    <div>
      <div className={styles["stars"]}>
        {[5, 4, 3, 2, 1].map(index => {
          let filled = index <= mouseOverIndex ? styles['star-filled'] : '';

          return renderStar({
            index,
            setMouseOver,
            setRaitnig,
            filled,
          })
        })}
      </div>
    </div>
  )
}

export default React.memo(Stars);