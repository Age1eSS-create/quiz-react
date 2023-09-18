import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { categoryApi } from '@/entities/category';
import {userReducer} from "@/entities/user";

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
            userReducer,
            // reducerManager.
        },
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware),
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        //     serializableCheck: false,
        //     thunk: {
        //         extraArgument,
        //     },
        // }),
    });

    // store.reducerManager = reducerManager;

    return store;
}
