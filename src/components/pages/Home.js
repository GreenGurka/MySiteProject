import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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

        <section class='top-container'>
          <header class='showcase1'>
            <h1>Your Web Presence</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              ipsam! Nihil quo minima nulla atque!
            </p>
            <a href='/' class='btn'>
              Read More
            </a>
          </header>
          <div class='top-box top-box-a'>
            <h4>Membership</h4>
            <p class='price'>$199/mo</p>
            <a href='/' class='btn'>
              Buy Now
            </a>
          </div>
          <div class='top-box top-box-b'>
            <h4>Pro Membership</h4>
            <p class='price'>$299/mo</p>
            <a href='/' class='btn'>
              Buy Now
            </a>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
