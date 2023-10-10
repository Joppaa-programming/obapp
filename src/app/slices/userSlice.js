import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import users from '../utils/users';
import { filterByKey } from '../helpers/minifunctions';

export const fetchUser = createAsyncThunk('origins/getAll', async ()=> {
    // const response = await fetch("url");
    // const data = response.json();
    const data = origins;
    return data ;
})
 const id = 2;
const _user = filterByKey("id", users,id)
const initialState =   {
     user : [],
    "status": 'idle'
    }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
userAdded : {
  reducer(state,action){
    state.user.push(action.payload);
  }
}
  },
  extraReducers:(builder)=>{
builder.addCase(fetchUser.fulfilled, (state, actions)=>{
    state.status = 'fulfilled';
    // const loadedOrigins = actions.payload.map(origin => {

    // })
     state.origins = state.user.concat(actions.payload);
})
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { originAdded, originToggled } = originsSlice.actions

// Export the slice reducer as the default export
export default userSlice.reducer