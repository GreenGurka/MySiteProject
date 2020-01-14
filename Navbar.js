import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/slide';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-links'>
        <li className='links'>
          <Link to='/'>Home</Link>
        </li>
        <li className='links'>
          <Link to='/Portfolio'>Portfolio</Link>
        </li>
        <li className='links'>
          <Link to='/Contact'>Contact</Link>
        </li>
        <Menu right disableAutoFocus>
          <li className='bm-item'>
            <Link to='/'>Home</Link>
          </li>
          <br />
          <li className='bm-item'>
            <Link to='/Portfolio'>Portfolio</Link>
          </li>
          <br />
          <li className='bm-item'>
            <Link to='/Contact'>Contact</Link>
          </li>
        </Menu>
      </ul>
    </div>
  );
};

export default Navbar;
