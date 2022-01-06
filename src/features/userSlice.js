import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counter/counterAPI';

const initialState = {
  user: null,
  
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    }, 

  },

});

export const { signin } = userSlice.actions;


export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
