import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const CompletedTaskDisplay = () => {
  const [completedTask, setCompletedTask] = useState<[]>();

  const todos = useSelector((state: any) => state?.todo.todos);

  useEffect(() => {
    const filteredData = todos.filter((item: any) => {
      return item.isCompleted == true;
    });
    setCompletedTask(filteredData);
  }, [todos]);
  console.log(completedTask);

  return <div></div>;
};

export default CompletedTaskDisplay;
