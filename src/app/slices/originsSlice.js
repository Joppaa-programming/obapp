import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import origins from '../utils/origins';

export const fetchOrigins = createAsyncThunk('origins/getAll', async ()=> {
    // const response = await fetch("url");
    // const data = response.json();
    const data = origins;
    return data ;
})


const initialState =   {
     origins : origins,
    "status": 'idle'
    }



const originsSlice = createSlice({
  name: 'origins',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
originsAdded : {
  reducer(state,action){
    state.origins.push(action.payload);
  }
}
  },
  extraReducers:(builder)=>{
builder.addCase(fetchOrigins.fulfilled, (state, actions)=>{
    state.status = 'fulfilled';
    // const loadedOrigins = actions.payload.map(origin => {

    // })
     state.origins = state.origins.concat(actions.payload);
})
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
// export const { originAdded, originToggled } = originsSlice.actions

// Export the slice reducer as the default export
export default originsSlice.reducer