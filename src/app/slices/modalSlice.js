import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState =   {
     isVisible : false,
    }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
showModal : {
  reducer(state,action){
    state.user.push(action.payload);
  }
},
closeModal : { reducer(state,action){
    state.user.push(action.payload);
  }}
  },
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { originAdded, originToggled } = originsSlice.actions

// Export the slice reducer as the default export
export default userSlice.reducer