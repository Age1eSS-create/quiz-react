import { CategorySchema } from '@/entities/category';

export const getCategoryListSelector = (state:{ categoryReducer: CategorySchema }) => {
    return state?.categoryReducer?.category ?? null;
};
