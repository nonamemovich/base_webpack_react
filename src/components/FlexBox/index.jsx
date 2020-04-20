import React from 'react';
import styles from './styles.scss';

export const Flex = () => {
  return (
    <div className={styles.wrapper}>


      <span className={styles.label}> table flex row</span>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.cell1}>
              header 1
          </div>
          <div className={styles.cell2}>
              header 2
          </div>
          <div className={styles.cell3}>
              header 3 ard 58ju9nh 85 ujt9ungup[q3 b99e8t h9y[su 39n34
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell1}>
              header 1 ard 58ju9nh 85 ujt9ungup[q3 b99e8t h9y[su 39n34
          </div>
          <div className={styles.cell2}>
              header 2
          </div>
          <div className={styles.cell3}>
              header 3
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell1}>
              header 1
          </div>
          <div className={styles.cell2}>
              header 2 ard 58ju9nh 85 ujt9ungup[q3 b99e8t h9y[su 39n34
          </div>
          <div className={styles.cell3}>
              header 3
          </div>
        </div>
      </div>


      <span className={styles.label}> table</span>
      <table>
        <thead>
          <tr>
            <th>
              header 1
            </th>
            <th>
              header 2
            </th>
            <th>
              header 3 ard 58ju9nh 85 ujt9ungup[q3 b99e8t h9y[su 39n34
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              header 1 ard 58ju9nh 85 ujt9ungup[q3 b99e8t h9y[su 39n34
            </td>
            <td>
              header 2
            </td>
            <td>
              header 3
            </td>
          </tr>
          <tr>
            <td>
              header 1
            </td>
            <td>
              header 2 ard 58ju9nh 85 ujt9ungup[q3 b99e8t h9y[su 39n34
            </td>
            <td>
              header 3
            </td>
          </tr>
        </tbody>
      </table>
      

      <div className={styles.div_table}>
        <span className={styles.label}> table flex column</span>
        <div className={styles.tableColumn}>
          <div className={`${styles.column} ${styles.first_column}`}>
            <div className={`${styles.first} ${styles.flexcell}`}>
              row 1 col 1
            </div>
            <div className={`${styles.first} ${styles.flexcell}`}>
              row 2 col 1
            </div>
            <div className={`${styles.first} ${styles.flexcell}`}>
              row 3 col 1 ard 58ju9nh 85 ujt9ungup
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.flexcell}>
                header 1
            </div>
            <div className={styles.flexcell}>
                header 2
            </div>
            <div className={styles.flexcell}>
                header 3
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.flexcell}>
                header 1
            </div>
            <div className={styles.flexcell}>
                header 2
            </div>
            <div className={styles.flexcell}>
                header 3
            </div>
          </div>
        </div>
      </div>

      <span className={styles.label}> Grid</span>
      <div className={styles.wrapper2}>
        <div className={styles.one}>One</div>
        <div className={styles.two}>Two</div>
        <div className={styles.three}>Three</div>
        <div className={styles.four}>Four</div>
        <div className={styles.five}>Five</div>
        <div className={styles.six}>Six</div>
      </div>
    </div>
  )
}

export default Flex;
