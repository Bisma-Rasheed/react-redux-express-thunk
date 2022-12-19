import { configureStore } from '@reduxjs/toolkit';
import { messageSlice } from './messageSlice';

export default configureStore({
    reducer: {
        messagesReducer:messageSlice.reducer
    }
})