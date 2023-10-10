import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import users from '../utils/users';

export const fetchUser = createAsyncThunk('origins/getAll', async ()=> {
    // const response = await fetch("url");
    // const data = response.json();
    const data = origins;
    return data ;
})


const initialState =   {
     users : users,
    "status": 'idle'
    }



const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
usersAdded : {
  reducer(state,action){
    state.users.push(action.payload);
  }
}
  },
  extraReducers:(builder)=>{
builder.addCase(fetchUser.fulfilled, (state, actions)=>{
    state.status = 'fulfilled';
    // const loadedOrigins = actions.payload.map(origin => {

    // })
     state.origins = state.users.concat(actions.payload);
})
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { originAdded, originToggled } = originsSlice.actions

// Export the slice reducer as the default export
export default usersSlice.reducer