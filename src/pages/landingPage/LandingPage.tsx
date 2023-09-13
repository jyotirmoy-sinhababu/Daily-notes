import CompletedTaskDisplay from '../../components/completedTaskDisplay/CompletedTaskDisplay';
import FilterBarComp from '../../components/filterBarComp/FilterBarComp';
import Nav from '../../components/nav/Nav';
import TodoListDisplay from '../../todoListDisplay/TodoListDisplay';

import { useState } from 'react';

const LandingPage = () => {
  const [togglePage, setTogglePage] = useState<boolean>(true);
  return (
    <>
      {' '}
      <div className='flex justify-center py-4 '>
        <Nav />
      </div>
      <FilterBarComp setTogglePage={setTogglePage} togglePage={togglePage} />
      <div className='flex justify-center align-middle p-12 '>
        {togglePage ? <TodoListDisplay /> : <CompletedTaskDisplay />}
      </div>
    </>
  );
};

export default LandingPage;
