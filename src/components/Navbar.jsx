import { Link } from 'react-router-dom';

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
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className=' nav-item pr-3'>
              <Link to='see-cv' className='nav-link '>
                See CV
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
