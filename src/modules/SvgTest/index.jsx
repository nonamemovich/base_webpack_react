import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import variables from './variables.scss';
import styles from './styles.scss';

const INFLUENCE = {
  NOT_AFFECT: "zero",
  LOWEST: "lowest",
  LOW: 'low',
  MIDDLE: "middle",
  HIGTH: 'higth',
}

const contentWidth = 600;
const contentHeight = 300;

export const svgTest = ({
  influenceValue,
  width,
  containerClass,
}) => {
  const radius = 145;
  const radiusDash = 200;

  let rotate;
  switch(influenceValue) {
    case INFLUENCE.LOWEST:
      rotate = variables.lowest;
      break;
    case INFLUENCE.LOW:
      rotate = variables.low
      break;
    case INFLUENCE.MIDDLE:
      rotate = variables.middle;
      break;
    case INFLUENCE.HIGTH:
      rotate = variables.higth;
      break;
    default:
      rotate = variables.zero;
  }
  const arrowClasses = cn(styles["speed-arrow"]);
  const scale = width / contentWidth;

  return (
    <div className="svg-container-relative">
      <div
        className={cn(styles["content"], containerClass)}
        style={{
          width: `${contentWidth * scale}px`,
          height: `${contentHeight * scale}px`,
        }}
      >
        <svg
          className={styles["circle-container"]}
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <circle
            cx="150"
            cy="150"
            r={radius}
            className={styles["circle"]}
            style={{
              transform: "translateY(50%) translateX(25%)",
            }}
          />

          <circle
            cx="150"
            cy="150"
            r={radiusDash}
            className={cn(styles["circle-test"], {
              [styles.selected]: INFLUENCE.LOWEST === influenceValue
            })}
            strokeDashoffset="0"
            style={{
              transform: "translateY(164.4%) translateX(64.3%) rotate(0.56turn)",
            }}
          />
          <circle
            cx="150"
            cy="150"
            r={radiusDash}
            className={cn(styles["circle-test"], {
              [styles.selected]: INFLUENCE.LOW === influenceValue
            })}
            strokeDashoffset="0"
            style={{
              transform: "translateY(164.5%) translateX(35.7%) rotate(0.691turn)",
            }}
          />

          <circle
            cx="150"
            cy="150"
            r={radiusDash}
            className={cn(styles["circle-test"], {
              [styles.selected]: INFLUENCE.MIDDLE === influenceValue
            })}
            strokeDashoffset="0"
            style={{
              transform: "translateY(119.5%) translateX(15.7%) rotate(0.83turn)",
            }}
          />

          <circle
            cx="150"
            cy="150"
            r={radiusDash}
            className={cn(styles["circle-test"], {
              [styles.selected]: INFLUENCE.HIGTH === influenceValue
            })}
            strokeDashoffset="0"
            style={{
              transform: "translateY(64.5%) translateX(19.7%) rotate(0.96turn)",
            }}
          />
        </svg>

        <svg
          style={{
            transform: `scale(${scale}) ${rotate}`,
            top: `${150 * scale}px`,
          }}
          className={arrowClasses}
        >
          <circle
            cx="150"
            cy="150"
            r={33}
            className={styles["circle-black"]}
          />
          <path
            style={{
              fill: "#000000",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "0.26458332px",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              transform: "translateX(125px) translateY(-151px)",
            }}
            d="M 21.804998,155.43424 0,297 H 50 L 27.361632,155.43146 c 0,0 -0.08922,-2.15305 -2.582612,-2.10295 -3.097481,0.0622 -2.974022,2.10573 -2.974022,2.10573 z"
          />
        </svg>
      </div>
    </div>
  )
}

svgTest.propTypes = {
  influenceValue: PropTypes.oneOfType([
    INFLUENCE.NOT_AFFECT,
    INFLUENCE.LOWEST,
    INFLUENCE.LOW,
    INFLUENCE.MIDDLE,
    INFLUENCE.HIGTH,
  ]),
  width: PropTypes.number,
  containerClass: PropTypes.string,
}

svgTest.defaultProps = {
  influenceValue: INFLUENCE.MIDDLE,
  width: 200,
}

export default svgTest;