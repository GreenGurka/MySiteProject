import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const welcome = () => {
  return (
    <Fragment>
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
                  <a href='/'>Portfolio/Cv</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className='showcase'>
        <div className='container showcase-inner'>
          <h1>Välkommen!</h1>
          <p>
            Här hittar ni min webdev Portfölj, Kontaktuppgifter och Cv! Jag är
            just nu på jakt efter en anställning som Frontend developer. Kicka
            vidare för att få reda på mer.
          </p>
          <Link to='/Home' className='btn'>
            Home
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default welcome;
