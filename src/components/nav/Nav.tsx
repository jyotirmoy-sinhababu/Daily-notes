import { BsSun } from 'react-icons/bs';

const Nav = () => {
  return (
    <div className='flex justify-center '>
      <h2 className='decoration-gray-300'>TODO APP</h2>
      <button>
        <BsSun />
      </button>
    </div>
  );
};

export default Nav;
