import { BsSun } from 'react-icons/bs';

import './nav.css';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <h2 className=''>TODO APP</h2>
      <button>
        <BsSun />
      </button>
    </div>
  );
};

export default Nav;
