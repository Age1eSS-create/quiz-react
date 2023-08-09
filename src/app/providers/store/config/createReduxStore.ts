import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager, ReduxStoreWithManager } from 'async-reducer-manager';

// import { ThunkExtraArg } from './StateSchema';

/**
 * Создание ReduxStore
 * Принимает @rootReducers - основные редьюсеры
 * Возвращает стор
 */
export function createReduxStore<StateSchema>(rootReducers: ReducersMapObject<StateSchema>) {
    const reducerManager = createReducerManager<StateSchema>(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        //     serializableCheck: false,
        //     thunk: {
        //         extraArgument,
        //     },
        // }),
    }) as ReduxStoreWithManager<StateSchema>;

    store.reducerManager = reducerManager;

    return store;
}
