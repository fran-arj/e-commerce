//import React from 'react';
import { Fragment } from 'react';
// snnipet rafce
const Footer = ({ name, children }) => {
  return (
    <Fragment>
      <div>
        <h1>FOOTER</h1>
        <h2>lorem {name}</h2>
      </div>
      {children[1]}
      {children}
      <p>píe de página</p>
    </Fragment>
  );
};

export default Footer;
