import React from 'react';
// import Auxe from '../../hoc/Auxe';
import styles from './Layout.module.css';

const layout = (props) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </>
  );
};

export default layout;
