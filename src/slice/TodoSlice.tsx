import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
