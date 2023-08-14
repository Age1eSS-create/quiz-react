import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { categoryApi } from '@/entities/category';

// import { ThunkExtraArg } from './StateSchema';

/**
 * Создание ReduxStore
 * Принимает @rootReducers - основные редьюсеры
 * Возвращает стор
 */
export function createReduxStore<StateSchema>(rootReducers: ReducersMapObject<StateSchema>) {
    // const reducerManager = createReducerManager<StateSchema>(rootReducers);

    const store = configureStore({
        // reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        reducer: {
            [categoryApi.reducerPath]: categoryApi.reducer,
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
