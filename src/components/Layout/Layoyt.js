import React from 'react';
import Auxe from '../../hoc/Auxe';

const layout = (props) => {
  return (
    <Auxe>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </Auxe>
  );
};

export default layout;
