import { createSlice } from '@reduxjs/toolkit';

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: { value: false },
  reducers: {
    selectTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { selectTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
