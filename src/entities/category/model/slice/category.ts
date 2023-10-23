import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';

import { CategorySchema, ICategory } from '@/entities/category';


const initialState: CategorySchema = {
    category: null,
};

const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action:PayloadAction<Array<ICategory>>) => {
            state.category = action.payload;
        },
    },
});

export const {
    actions: categoryActions,
    reducer: categoryReducer,
} = slice;
