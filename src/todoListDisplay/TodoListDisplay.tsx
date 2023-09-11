import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../slice/TodoSlice';

import { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import ErrorPage from '../components/errorPage/ErrorPage';

const TodoListDisplay = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [completedData, setCompletedData] = useState<[]>([]);

  const todos = useSelector((state: any) => state?.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  // console.log(isCompleted);

  const taskCompleted = () => {
    const filteredData = todos.filter((item: object) => {
      if ((item.completed as string) == 'true') {
        return true;
      }
      return false;
    });
    setCompletedData([...completedData, filteredData]);
  };
  console.log(completedData);

  return (
    <div className='flex gap-[53px] flex-wrap'>
      {todos.length ? (
        todos?.map((item: any) => {
          return (
            <div
              className='border-4 w-[320px] h-[110px] rounded-lg px-2 py-2 bg-slate-700 overflow-auto '
              key={item.id}
            >
              <div className='flex justify-between'>
                <div>
                  <input
                    type='checkbox'
                    name='completed'
                    onChange={() => {
                      !isCompleted
                        ? setIsCompleted(true)
                        : setIsCompleted(false);
                      taskCompleted();
                    }}
                  />
                  <label>Mark as completed</label>
                </div>
                <button
                  type='button'
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div>
                <p className=' flex flex-wrap font-semibold text-red-100 '>
                  {item.dailyTodo}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className='flex'>
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default TodoListDisplay;
