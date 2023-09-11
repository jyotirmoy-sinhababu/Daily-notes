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
  console.log(completedTask);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {completedTask?.length ? (
        completedTask.map((item: any) => {
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
        <div>
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default CompletedTaskDisplay;
