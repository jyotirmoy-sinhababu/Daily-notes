import { BsSun } from 'react-icons/bs';
import desktopDark from '../../assets/desktopDark.jpg';

import './nav.css';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <div className='navImg-cnt'>
        <img className='dark-img' src={desktopDark} alt='dark theme' />
      </div>
      <div className='nav-txtBtn-cnt'>
        {' '}
        <h2 className='nav-hd'>TODO APP</h2>
        <button>
          <BsSun />
        </button>
      </div>
    </div>
  );
};

export default Nav;
