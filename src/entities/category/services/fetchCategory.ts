import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {categoryActions, ICategory} from '@/entities/category';
import { Dispatch } from '@reduxjs/toolkit';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: './server/category.json' }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategoryList: builder.query<ICategory[], void>({
            queryFn: async () => {
                try {
                    const res = await fetch('./server/category.json');
                    const data = await res.json();
                    console.log(data.data)
                    // dispatch(categoryActions.setCategory(data.data));
                    return data.data;
                } catch (e) {
                    console.log('GetCategoryList ERROR', e);
                }
            },

        }),
        getCategorySearchList: builder.query<ICategory[], void>({
            // @ts-ignore
            query: async (text:string) => {
                try {
                    const res = await fetch('./server/category.json');
                    const data = await res.json();
                    console.log(data.data)
                    return data.data.filter((item:ICategory) => item.title.includes(text) || item.subtitle.includes(text));
                } catch (e) {
                    console.log('GetCategoryList ERROR', e);
                }
            },
        }),
    }),
});

export const { useGetCategoryListQuery, useGetCategorySearchListQuery } = categoryApi;
