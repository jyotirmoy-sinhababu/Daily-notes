import { BsPencilSquare } from 'react-icons/bs';

const InputForm = () => {
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
      }}
      className='flex justify-center'
    >
      <input
        type='text'
        className='w-[580px] h-12 rounded-lg pl-4'
        placeholder='Create a new todo...'
      />
      <button type='submit' className='flex text-stone-200 text-5xl'>
        <BsPencilSquare />
      </button>
    </form>
  );
};

export default InputForm;
