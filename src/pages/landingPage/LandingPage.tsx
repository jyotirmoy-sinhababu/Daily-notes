import CompletedTaskDisplay from '../../components/completedTaskDisplay/CompletedTaskDisplay';
import Nav from '../../components/nav/Nav';
import TodoListDisplay from '../../todoListDisplay/TodoListDisplay';

const LandingPage = () => {
  return (
    <>
      {' '}
      <div className='flex justify-center py-4 '>
        <Nav />
      </div>
      <div className='flex justify-center align-middle p-12 '>
        <TodoListDisplay />
        <CompletedTaskDisplay />
      </div>
    </>
  );
};

export default LandingPage;
