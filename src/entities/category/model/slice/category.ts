import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategorySchema, ICategory } from '@/entities/category';


const initialState:CategorySchema = {
    category: null,
};

const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state:CategorySchema, action:PayloadAction<Array<ICategory>>) => {
            console.log(action.payload)
            state.category = action.payload;
        },
    },
});

export const {
    actions: categoryActions,
    reducer: categoryReducer,
} = slice;
