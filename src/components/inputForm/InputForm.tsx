import { FiSearch } from 'react-icons/fi';

const InputForm = () => {
  return (
    <form className='flex justify-center'>
      <input
        type='text'
        className='w-[580px] h-12 rounded-lg pl-4'
        placeholder='Create a new todo...'
      />
      <button>
        <FiSearch />
      </button>
    </form>
  );
};

export default InputForm;
