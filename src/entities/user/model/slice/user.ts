import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, UserSchema } from '@/entities/user';

const initialState:UserSchema = {
    user: null,
    role: 'quest',
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state:UserSchema, action:PayloadAction<UserSchema>) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
} = slice;
