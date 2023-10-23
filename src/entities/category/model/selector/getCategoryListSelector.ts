import { CategorySchema } from '@/entities/category';
import {StateSchema} from "@/app/providers/store";

export const getCategoryListSelector = (state: StateSchema) => {
    return state?.categoryReducer?.category ?? null;
};
