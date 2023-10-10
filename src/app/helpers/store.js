import { configureStore } from '@reduxjs/toolkit'
import originsReducer from '../slices/originsSlice'
import savedReducer from '../slices/savedSlice';
import usersReducer from '../slices/usersSlice';
import userReducer from '../slices/userSlice';
import  authReducer from '../slices/auth/auth';
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
        origins: originsReducer,
        saved: savedReducer,
        users: usersReducer,
        user: userReducer,
        auth: authReducer
    }
  })
  
export default store;  