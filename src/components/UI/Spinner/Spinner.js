import React from 'react';
import styles from './spinner.module.css';
const spinner = () => {
  return (
    <>
      <div className={styles.spinner}>Loading...</div>
    </>
  );
};

export default spinner;
