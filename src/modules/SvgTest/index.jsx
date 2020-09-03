import React from 'react';
import styles from './styles.scss';

export const svgTest = () => {
  const radius = 145;
  const cicleLength = 2 * Math.PI * radius; // 822,68
  const radiusDash = 200;
  const cicleLengthDash = 2 * Math.PI * radiusDash; 

  return (
    <div>
      <svg className={styles["circle-container"]}>
        <circle
          cx="150"
          cy="150"
          r={radius}
          className={styles["circle-protein"]}
          //strokeDasharray={`${(cicleLength / 2) - 2} ${cicleLength * 2}`}
          // strokeDashoffset="0"
          style={{
            transform: "translateY(50%) translateX(25%)",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(164.4%) translateX(64.3%) rotate(0.56turn)",
          }}
        />
        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(164.5%) translateX(35.7%) rotate(0.691turn)",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(119.5%) translateX(15.7%) rotate(0.83turn)",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(64.5%) translateX(19.7%) rotate(0.96turn)",
          }}
        />
      </svg>

      <svg className={styles["circle-test"]}>
        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-dash"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(30%) translateX(25%)",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(90.5%) translateX(51%) rotate(0.62turn)",
            strokeDasharray: "708, 1030",
            strokeDashoffset: "712",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(81.5%) translateX(26.5%) rotate(0.74turn)",
            strokeDasharray: "708, 1030",
            strokeDashoffset: "715",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(58.4%) translateX(14.9%) rotate(0.86turn)",
            strokeDasharray: "708, 1030",
            strokeDashoffset: "715",
          }}
        />

        <circle
          cx="150"
          cy="150"
          r={radiusDash}
          className={styles["circle-test"]}
          strokeDashoffset="0"
          style={{
            transform: "translateY(33.1%) translateX(22.1%) rotate(0.98turn)",
            strokeDasharray: "708, 1030",
            strokeDashoffset: "715",
          }}
        />
      </svg>

    </div>
  )
}

export default svgTest;