import CompletedTaskDisplay from '../../components/completedTaskDisplay/CompletedTaskDisplay';
import FilterBarComp from '../../components/filterBarComp/FilterBarComp';
import Nav from '../../components/nav/Nav';
import TodoListDisplay from '../../todoListDisplay/TodoListDisplay';

import { useSelector } from 'react-redux';

import { useState } from 'react';

const LandingPage = () => {
  const theme = useSelector((state: any) => state?.theme.value);

  const themeColor = {
    dark: {
      backgroundColor: theme ? ' hsl(207, 26%, 17%)' : 'white',
      height: '100vh',
    },
  };

  const [togglePage, setTogglePage] = useState<boolean>(true);
  return (
    <div style={themeColor.dark}>
      {' '}
      <div className='flex justify-center py-4 '>
        <Nav />
      </div>
      <FilterBarComp setTogglePage={setTogglePage} togglePage={togglePage} />
      <div className='flex justify-center align-middle p-12 '>
        {togglePage ? <TodoListDisplay /> : <CompletedTaskDisplay />}
      </div>
    </div>
  );
};

export default LandingPage;
