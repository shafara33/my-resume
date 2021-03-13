import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar  bg-black '>
        <div className='nav p-3'>
          <h3 className=' '>
            <span className='font-weight-light'>Juma </span>
            <span className='font-weight-bold'> Shafara</span>
          </h3>
        </div>

        <div className='links navbar-nav font-weight-light '>
          <ul className='nav'>
            <li className='nav-item pr-3'>
              <a href='' className='nav-link'></a>Home
            </li>
            <li className=' nav-item pr-3'>
              <a href='' className='nav-link '></a>About
            </li>
            <li className=' nav-item pr-3'>
              <a href='' className='nav-link '></a>See CV
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
