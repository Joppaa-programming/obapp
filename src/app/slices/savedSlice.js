import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import savedOrigins from '../utils/savedOrigins';

export const fetchOrigins = createAsyncThunk('origins/getAll', async ()=> {
    // const response = await fetch("url");
    // const data = response.json();
    const data = savedOrigins;
    return data ;
})


const initialState =   {
     saved : [] ,
    "status": 'idle'
    }



const savedSlice = createSlice({
  name: 'saves',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    originSaved : {
  reducer(state,action){
   const userObj =  state.saved.find( saved => saved.id === action.payload.id)
   if(userObj){
    const exists = userObj.origins.find(savedOrigin => savedOrigin.id === action.payload.origins[0].id);
    if (exists){
        return
    }
    userObj.origins.push(action.payload.origins[0]);
    return
   }
    
    state.saved.push(action.payload);
  }
},
originAdded : {
    reducer(state,action){
       
      state.saved[0].origins.push(action.payload);
    }
  },
originDeleted : {
    reducer(state,action){
      state.saved.splice(action.payload);
    }
  }
  },
  extraReducers:(builder)=>{
builder.addCase(fetchOrigins.fulfilled, (state, actions)=>{
    state.status = 'fulfilled';
    // const loadedOrigins = actions.payload.map(origin => {

    // })
     state.origins = state.saved.concat(actions.payload);
})
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { originSaved, originDeleted,originAdded } = savedSlice.actions

// Export the slice reducer as the default export
export default savedSlice.reducer