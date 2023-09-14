import { useState } from 'react';

import { BsPencilSquare } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../slice/TodoSlice';

const InputForm = () => {
  const [inputData, setInputData] = useState<object>();

  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state?.todo.todos);

  const handleTodo = () => {
    const todoWithId = {
      ...inputData,
      id: idGenerator(),
      isCompleted: false,
    };
    dispatch(addTodo([...todos, todoWithId]));
    setInputData({});
  };

  // console.log(todos);

  const idGenerator = () => {
    return Math.floor(Math.random() * 100000) + 1;
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        handleTodo();
      }}
      className='flex justify-center align-middle'
    >
      <input
        type='text'
        name='dailyTodo'
        className='lg:w-[580px] md:w-[450px] md:h-10 lg:h-12 rounded-lg pl-4 h-8 w-[210px] '
        placeholder='Create a new todo...'
        onChange={(e) => {
          setInputData({ ...inputData, [e.target.name]: e.target.value });
        }}
      />
      <button
        type='submit'
        className='flex text-stone-200 lg:text-5xl md:text-4xl text-[25px]'
      >
        <BsPencilSquare />
      </button>
    </form>
  );
};

export default InputForm;
