import Nav from '../../components/nav/Nav';
import TodoListDisplay from '../../todoListDisplay/TodoListDisplay';

const LandingPage = () => {
  return (
    <>
      {' '}
      <div className='flex justify-center py-4 '>
        <Nav />
      </div>
      <div className='flex  p-12 '>
        <TodoListDisplay />
      </div>
    </>
  );
};

export default LandingPage;
