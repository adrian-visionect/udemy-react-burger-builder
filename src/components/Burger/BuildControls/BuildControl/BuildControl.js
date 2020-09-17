import React from 'react';
import styles from './BuildControl.module.css';
const buildControl = (props) => {
  return (
    <div>
      <div className={styles.BuildControl}>{props.label}</div>
      <button className={styles.Less} onClick={props.removed}>
        Less
      </button>
      <button className={styles.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
