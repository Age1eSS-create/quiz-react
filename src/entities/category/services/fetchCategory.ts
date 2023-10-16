import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory } from '@/entities/category';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: './server/' }),
    endpoints: (builder: any) => ({
        getCategoryList: builder.query({
            queryFn: async () => {
                try {
                    const res = await fetch('./server/category.json');
                    // eslint-disable-next-line no-promise-executor-return
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    const data = await res.json();
                    console.log(data);
                    return data;
                } catch (e) {
                    console.log('GetCategoryList ERROR', e);
                }
            },
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
