import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';

import { deleteTodo, addTodo } from '../../slice/TodoSlice';

import ErrorPage from '../errorPage/ErrorPage';

const CompletedTaskDisplay = () => {
  const [completedTask, setCompletedTask] = useState<any>();

  const todos = useSelector((state: any) => state?.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredData = todos.filter((item: any) => {
      return item.isCompleted == true;
    });
    setCompletedTask(filteredData);
  }, [todos]);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='flex gap-[53px] flex-wrap'>
      {completedTask?.length ? (
        completedTask.map((item: any) => {
          return (
            <div
              className='border-4 w-[320px] h-[115px] rounded-lg px-2 py-2 bg-slate-500 overflow-auto flex gap-4 flex-col '
              key={item.id}
            >
              <div className='flex justify-between'>
                <div>
                  <input
                    type='checkbox'
                    name='completed'
                    checked={item.isCompleted == true}
                    onChange={() =>
                      dispatch(
                        addTodo([
                          ...todos?.filter(
                            (todo: any) => todo?.id !== item?.id
                          ),
                          { ...item, isCompleted: !item.isCompleted },
                        ])
                      )
                    }
                  />
                  <label className='font-serif'>Completed</label>
                </div>
                <button
                  type='button'
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className='text-red-800 font-semibold'
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div>
                <p className=' flex flex-wrap font-semibold text-red-100 font-serif'>
                  {item.dailyTodo}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default CompletedTaskDisplay;
