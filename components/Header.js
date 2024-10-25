import React from 'react';
import Navbar from './Navbar';

const Header = ({position}) => {
  return (
    <header className={`${position} z-50 w-full border-b border-[#ebebeb]`}>
      <Navbar />
    </header>
  );
};

export default Header;