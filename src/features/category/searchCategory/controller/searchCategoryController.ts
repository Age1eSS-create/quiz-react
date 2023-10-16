import { Dispatch } from '@reduxjs/toolkit';
import {categoryActions, ICategory} from "@/entities/category";

export const searchCategoryThunk = (text:string) => async (dispatch: Dispatch, getState: () => any) : Promise<void> => {
    console.log(text)
    try {
        const data = getState().categoryReducer.category;
        if (!data) return;
        const newData = data.filter((item:ICategory) => item.title.includes(text) || item.subtitle.includes(text));
        console.log(newData);
        dispatch(categoryActions.setCategory(newData));
    }
    catch (err) {
        console.log(err);
    }
}
