import { BsSun } from 'react-icons/bs';

import desktopDark from '../../assets/desktopDark.jpg';
import InputForm from '../inputForm/InputForm';

const Nav = () => {
  return (
    <div className='relative'>
      <div className=''>
        <img className='' src={desktopDark} alt='dark theme' />
      </div>
      <div className='flex justify-around absolute w-full top-16 '>
        {' '}
        <h2 className='font-black text-stone-200 text-2xl'>TODO APP</h2>
        <button className='text-stone-200 text-2xl'>
          <BsSun />
        </button>
      </div>
      <div>
        <InputForm />
      </div>
    </div>
  );
};

export default Nav;
