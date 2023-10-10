// FETCH_ORIGINS_REQUEST: the app initiates a request to fetch origins from the server.
// FETCH_ORIGINS_SUCCESS: the server responds with origins and the app updates its state with the fetched data.
// FETCH_ORIGINS_FAILURE: the server responds with an error and the app handles the error accordingly.

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import origins from "../utils/origins";

// const  getOriginals = createAsyncThunk('saves/getAllorigins', async (thunkApi) => {
//         // const response = await fetch('url');
//         const data = await origins;
//         return data;
//     })

// const initialState = {
//     allOrigins: []
// }
// const originalsSlice = createSlice({
//     name: 'originals',
//     initialState: initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getOriginals.fulfilled, (state, action) => {
//             state.allOrigins.push(...action.payload)
//         })

//         // builder.addCase(getOriginals.pending, (state, action) => {

//         //     })

//     }
// })

// export default originalsSlice.reducer;

