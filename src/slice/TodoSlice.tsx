import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos = action.payload;
    },
    
    deleteTodo: (state, action) => {
      const filteredData = state.todos.filter((item: any) => {
        return item.id !== action.payload;
      });
      state.todos = filteredData;
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
