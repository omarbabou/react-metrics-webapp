import React from 'react';
import { BiMicrophone } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="Header">
    <Link to="/">
      <IoIosArrowBack className="header-back" />
    </Link>
    <div className="header-logo">Look at your weather!</div>
    <div className="header-icons">
      <BiMicrophone />
      <BsFillGearFill />
    </div>
  </div>
);

export default Header;
