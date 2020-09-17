import React from 'react';
import Logo from '../../Logo/Logo';
import styles from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer = (props) => {
  return (
    <div className={styles.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
