import { BsMoonStars, BsSun } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../slice/ThemeSlice';

import desktopDark from '../../assets/desktopDark.jpg';
import desktopLight from '../../assets/deskopLight.jpg';
import mobileDark from '../../assets/mobileDark.jpg';
import mobileLight from '../../assets/mobileLight.jpg';

import InputForm from '../inputForm/InputForm';

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state?.theme.value);

  const changeTheme = () => {
    dispatch(selectTheme());
  };

  return (
    <div className='relative'>
      <div className='hidden  md:block'>
        {!theme ? (
          <img
            className='rounded-lg hidden md:block md:shrink-0'
            src={desktopLight}
            alt='dark theme'
          />
        ) : (
          <img
            className='rounded-lg hidden md:block md:shrink-0'
            src={desktopDark}
            alt='dark theme'
          />
        )}
      </div>
      <div className='md:hidden block'>
        {!theme ? (
          <img
            className='rounded-lg w-[400px] md:hidden block'
            src={mobileLight}
            alt='dark theme'
          />
        ) : (
          <img
            className='rounded-lg w-[400px] md:hidden block'
            src={mobileDark}
            alt='dark theme'
          />
        )}
      </div>
      <div className='flex justify-around absolute w-full top-16 '>
        {' '}
        <h2 className='font-black text-stone-200 text-2xl'>TODO APP</h2>
        <button
          onClick={() => {
            changeTheme();
          }}
          className='text-stone-200 text-2xl'
        >
          {!theme ? <BsMoonStars /> : <BsSun />}
        </button>
      </div>
      <div className='absolute w-full lg:top-40  top-32'>
        <InputForm />
      </div>
    </div>
  );
};

export default Nav;
