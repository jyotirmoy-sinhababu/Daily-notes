import { useSelector } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';

const TodoListDisplay = () => {
  const todos = useSelector((state: any) => state?.todo.todos);

  return (
    <div className='flex gap-[53px] flex-wrap'>
      {todos ? (
        todos?.map((item: any) => {
          return (
            <div
              className='border-4 w-[320px] h-[110px] rounded-lg px-2 py-2 bg-slate-700  '
              key={item.id}
            >
              <div className='flex justify-end'>
                <button>
                  <AiOutlineClose />
                </button>
              </div>
              <div>
                <p className=' flex flex-wrap font-semibold text-red-100'>
                  {item.dailyTodo}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TodoListDisplay;
