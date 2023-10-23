import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {categoryActions, ICategory} from '@/entities/category';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: './server/category.json' }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategoryList: builder.query<ICategory[], void>({
            // @ts-ignore
            query: async () => {
                try {
                    const res = await fetch('./server/category.json');
                    const data = await res.json();
                    console.log(data.data)
                    return data.data;
                } catch (e) {
                    console.log('GetCategoryList ERROR', e);
                }
            },
            // @ts-ignore
            async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data)
                    // @ts-ignore
                    dispatch(categoryActions.setCategory(data?.data));
                } catch (e) {
                    console.log("ERROR onQueryStarted", e)
                }
            },
        }),

    }),
});

export const { useGetCategoryListQuery } = categoryApi;
