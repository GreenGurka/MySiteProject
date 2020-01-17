import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='wrapper'>
        <div className='contactWrap'>
          <h1 className='h1contact'>Kontakt</h1>
          <form className='contactForm'>
            <p>
              <label>Name</label>
              <input type='text' name='name' />
            </p>
            <p>
              <label>Company</label>
              <input type='text' name='company' />
            </p>
            <p>
              <label>Email Address</label>
              <input type='email' name='email' />
            </p>
            <p>
              <label>Phone Number</label>
              <input type='text' name='phone' />
            </p>
            <p className='message'>
              <label>Message</label>
              <textarea name='message' rows='10'></textarea>
            </p>
            <p>
              <button className='button'>Submit</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
