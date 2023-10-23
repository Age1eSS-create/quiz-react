import { createEntityAdapter, createSelector, EntityState } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory } from '@/entities/category';

const categoryAdapter = createEntityAdapter<ICategory>({
    selectId: (category) => category.id,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = categoryAdapter.getInitialState([]);

// @ts-ignore
export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: './server/' }),
    tagTypes: ['Category'],
    endpoints: (builder: any) => ({
        // @ts-ignore
        getCategoryList: builder.query<ICategory[], void>({
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
            transformResponse: (response: Array<ICategory>) => {
                console.log(response);
                return categoryAdapter.setAll(initialState, response);
            },
            // @ts-ignore
            providesTags: (result, error, arg) => (result
            // @ts-ignore
                ? [...result.map(({ id }) => ({ type: 'Category' as const, id })), 'Category']
                : ['Category']),
        }),
    }),
});

export const { useGetCategoryListQuery } = categoryApi;

// @ts-ignore
export const selectCategoryResult = categoryApi.endpoints.getCategoryList.select();

const selectCategoryData = createSelector(
    selectCategoryResult,
    (categoryResult) => categoryResult,
);

export const {
    selectAll: selectAllCategoryList,
    selectById: selectCategoryById,
    selectIds: selectCategoryIds,
    // @ts-ignore
} = categoryAdapter.getSelectors((state) => {
    console.log(state)
    // @ts-ignore
    return selectCategoryData(state) ?? initialState;
});
