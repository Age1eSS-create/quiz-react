import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory } from '@/entities/category';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: './server/' }),
    endpoints: (builder: any) => ({
        getCategoryList: builder.query({
            query: () => 'category.json',
            transformResponse: (response: { data: Array<ICategory> }) => response.data,
        }),
    }),
});
export const { useGetCategoryListQuery } = categoryApi;
// export const fetchCategory = () => {
//     const response = fetch('./server/category.json');
//     console.log(response);
//     return response;
// };
