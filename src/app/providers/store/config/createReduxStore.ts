import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { categoryApi, categoryReducer } from '@/entities/category';
import { questApi } from "@/entities/quest/services/fetchQuest";
import { userReducer } from "@/entities/user";

// import { ThunkExtraArg } from './StateSchema';

/**
 * Создание ReduxStore
 * Принимает @rootReducers - основные редьюсеры
 * Возвращает стор
 */
export function createReduxStore<StateSchema>() {
    const store = configureStore({
        reducer: {
            [categoryApi.reducerPath]: categoryApi.reducer,
            [questApi.reducerPath]: questApi.reducer,
            userReducer,
        },
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware, questApi.middleware),
    });

    // store.reducerManager = reducerManager;

    return store;
}
