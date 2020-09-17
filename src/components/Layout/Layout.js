import React from 'react';
// import Auxe from '../../hoc/Auxe';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={styles.Content}>{props.children}</main>
    </>
  );
};

export default layout;
