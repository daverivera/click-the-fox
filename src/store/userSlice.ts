import { createSlice } from '@reduxjs/toolkit';

interface UserName {
    value: string | undefined;
}

const initialState: UserName = {
    value: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.value = action.payload;
        },
        removeUser: state => {
            state.value = undefined;
        },
    },
});

export const { setName, removeUser } = userSlice.actions;
export default userSlice.reducer;
