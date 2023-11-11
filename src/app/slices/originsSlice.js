import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import origins from '../utils/origins';
import axios from 'axios';

const initialState = {
  origins: origins,
  "status": 'idle',
  error : ''
}


const fetchOrigins = createAsyncThunk('origins/fetchOrigins', async () => {
  try {
    const { data: response } = await axios.get('/api/origins');
    //console.log(JSON.stringify(response));
    return response;
  } catch (error) {
    throw error; // This will trigger the error state
  }
});





const originsSlice = createSlice({
  name: 'origins',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrigins.pending, (state, actions) => {
      console.log('origins pending');
      state.status = 'pending';
    }),
    builder.addCase(fetchOrigins.fulfilled, (state, actions) => {
      state.status = 'fulfilled';
    //  console.log('origins gotten',actions.payload);
      state.origins = actions.payload;
    }),
    builder.addCase(fetchOrigins.rejected, (state, actions) => {
   //   console.log('origins didnt gotten');
      state.origins = state.origins.concat(actions.payload);
      state.status = 'rejected';
    })
  }
 
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { originAdded, originToggled } = originsSlice.actions

// Export the slice reducer as the default export
//export default originsSlice.reducer
export const originsReducer = originsSlice.reducer;
export { fetchOrigins };