import { BsSun } from 'react-icons/bs';
import desktopDark from '../../assets/desktopDark.jpg';

const Nav = () => {
  return (
    <div className=''>
      <div className=''>
        <img className='' src={desktopDark} alt='dark theme' />
      </div>
      <div className=''>
        {' '}
        <h2 className=''>TODO APP</h2>
        <button>
          <BsSun />
        </button>
      </div>
    </div>
  );
};

export default Nav;
