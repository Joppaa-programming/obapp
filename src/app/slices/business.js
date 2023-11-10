import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import businesses from '../utils/business';
import axios from 'axios';

const initialState = {
  businesses: [],
  "status": 'idle',
  error : ''
}
export const revalidate = 10

const fetchBusinesses = createAsyncThunk('businesses/fetchBusinesses', async () => {
  try {
    const { data: response } = await axios.get('/api/business');
    //console.log(JSON.stringify(response));
    return response;
  } catch (error) {
    throw error; // This will trigger the error state
  }
});





const businessesSlice = createSlice({
  name: 'businesses',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBusinesses.pending, (state, actions) => {
      console.log('businesses pending');
      state.status = 'pending';
    }),
    builder.addCase(fetchBusinesses.fulfilled, (state, actions) => {
      state.status = 'fulfilled';
    // console.log('businesses gotten',actions.payload);
      state.businesses = actions.payload;
    }),
    builder.addCase(fetchBusinesses.rejected, (state, actions) => {
   //   console.log('businesses didnt gotten');
      state.businesses = state.businesses.concat(actions.payload);
      state.status = 'rejected';
    })
  }
 
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { originAdded, originToggled } = businessesSlice.actions

// Export the slice reducer as the default export
//export default businessesSlice.reducer
export const businessesReducer = businessesSlice.reducer;
export { fetchBusinesses };