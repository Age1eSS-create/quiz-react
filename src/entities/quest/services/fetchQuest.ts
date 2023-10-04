import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { QuestInfoType } from '@/entities/quest/services/types';

export const questApi = createApi({
    reducerPath: 'questApi',
    baseQuery: fetchBaseQuery({ baseUrl: './server/' }),
    endpoints: (builder) => ({
        getQuest: builder.query<QuestInfoType, number>({
            query: (id:number) => `http://localhost:3000/server/quest${id}.json`
        }),
    }),
});
export const { useGetQuestQuery } = questApi;
