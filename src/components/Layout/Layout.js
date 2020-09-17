import React from 'react';
// import Auxe from '../../hoc/Auxe';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>{props.children}</main>
    </>
  );
};

export default layout;
