import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';

import {categoryApi, categoryReducer} from '@/entities/category';
import { userReducer } from '@/entities/user';

import { createReduxStore } from '../config/createReduxStore';

/**
 * Обертка ReduxStore
 * Принимает @children -чилдрен компонент
 * Возвращает @children обернутый в провайдер
 */
export const StoreProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    // const rootReducers: ReducersMapObject<StateSchema> = {
    //     userReducer,
    // };

    const store = useMemo(() => createReduxStore<StateSchema>(), []);
    // @ts-ignore
    // @ts-ignore
    store.dispatch(categoryApi.endpoints.getCategoryList.initiate());
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
