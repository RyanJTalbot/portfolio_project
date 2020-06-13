import React from 'react';

const Header = props => (
  <header className='top'>
    <h1>
      Ryan
      <span className='jt'>
        <span className='j'>J</span>
        <span className='t'>T</span>
      </span>
      .DEV
    </h1>
    <h3 className='tagline'>
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
