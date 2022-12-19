import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateMessage = createAsyncThunk(
    'message/update',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message:data})
        };
        const res = await fetch('http://localhost:3000/message/add',requestOptions)
        return res.json();
    }
)

export const readMessage = createAsyncThunk(
    'message/read',
    async (data, thunkApi) => {
        const res = await fetch('http://localhost:3000/message')
        return res.json();
    }
)

const initialState = {
    messages: []
}
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: {
        [updateMessage.rejected]: (state) => {
            console.log('Rejected');
        },
        [updateMessage.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.messages = action.payload;
        },
        [updateMessage.pending]: state => {
            console.log('Pending...');
        },
        [readMessage.fulfilled]: (state, action) => {
            state.messages = action.payload;
        }
    }
})