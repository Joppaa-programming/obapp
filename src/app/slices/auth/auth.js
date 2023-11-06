
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL = 'http://localhost:3080'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `${backendURL}/users/signup`,
        { name, email, password },
        config
      )
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue(error.response.data)
      }
    }
  }
)
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/users/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data._id)
     // console.log(data);

      return data;
    } catch (error) {
      // console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue(error.response.data)
      }
    }
  }
)


let userToken = "";


if (typeof window !== 'undefined') {
  userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
  //console.log('we are running on the client')
} else {
 // console.log('we are running on the server');
}

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = null;
      state.userInfo = {};
      state.success = false;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    }
  },
  extraReducers: (builder) => {
    // register user
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;// registration successful
    }).addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }).addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;

    }).addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.id;
    })
  },
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { logout, setCredentials } = authSlice.actions

// Export the slice reducer as the default export
export default authSlice.reducer