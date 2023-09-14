import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, addTodo } from '../slice/TodoSlice';

import { AiOutlineClose } from 'react-icons/ai';

import ErrorPage from '../components/errorPage/ErrorPage';

const TodoListDisplay = () => {
  const todos = useSelector((state: any) => state?.todo.todos);
  const theme = useSelector((state: any) => state?.theme.value);

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const cardTheme = {
    backGroundColor: {
      backgroundColor: theme ? 'aliceblue' : ' hsl(207, 26%, 17%)',
    },
    textColor: {
      color: theme ? 'hsl(207, 26%, 17%)' : 'aliceblue',
    },
  };

  return (
    <div className='flex gap-[53px] flex-wrap'>
      {todos.length ? (
        todos?.map((item: any) => {
          return (
            <div
              style={cardTheme.backGroundColor}
              className='border-4 w-[320px] h-[115px] rounded-lg px-2 py-2  overflow-auto flex gap-2 flex-col '
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
                  <label style={cardTheme.textColor}>Completed</label>
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
                <p
                  style={cardTheme.textColor}
                  className=' flex flex-wrap font-semibold text-red-100  '
                >
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
