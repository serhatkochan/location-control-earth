import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: '',
    token: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    },
});

export const selectUser = (state) => state.user;

export const {} = userSlice.actions;
export default userSlice.reducer;
