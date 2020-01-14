import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <Fragment>
      <div class='wrapper'>
        <div className='menu-wrap'>
          <input type='checkbox' className='toggler' />
          <div className='hamburger'>
            <div></div>
          </div>
          <div className='menu'>
            <div>
              <div>
                <ul>
                  <li>
                    <Link to='/Home'>Home</Link>
                  </li>
                  <li>
                    <Link to='/Portfolio'>Portfolio/Cv</Link>
                  </li>
                  <li>
                    <Link to='/Contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p>Portfolio</p>
      </div>
    </Fragment>
  );
};

export default Portfolio;
