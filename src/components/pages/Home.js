import React, { Fragment } from 'react';
import Navbar from '../component/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='wrapper'>
        <div className='wrapper-home'>
          <div className='homeshowcase'>
            <h1>Hej!</h1>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              nihil architecto dolore recusandae nemo iusto alias illum commodi
              unde, autem assumenda exercitationem aliquam! At aliquam provident
              placeat, animi, enim voluptas a suscipit nesciunt impedit expedita
              temporibus illo laborum ullam illum.
            </h4>
          </div>
          <div className='home-box-1'></div>
          <div className='home-box-2'>
            <h3>Skills</h3>
            <p>
              This is my skills Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officia, esse.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
