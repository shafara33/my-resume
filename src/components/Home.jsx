import React from 'react';
import profile from '../projectImages/profile-picture.jpg';

const Home = () => {
  return (
    <div className='bg-black mb-3'>
      <div className='row p-5'>
        <div className='col-md-6'>
          <img src={profile} alt='' className='img-fluid img-center' />
        </div>
        <div className='col-md-6'>
          <h1 className='font-weight-light p-5'>
            Hi, My name is <span className='text-gold'> Juma Shafara</span> and
            I code super cool{' '}
            <span className='text-gold font-weight-bold'> websites!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
