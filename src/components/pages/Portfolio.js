import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='wrapper'>
        <h1>Portfolio</h1>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Portfolio;
