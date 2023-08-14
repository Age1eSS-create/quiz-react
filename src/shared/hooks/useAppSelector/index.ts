import { TypedUseSelectorHook, useSelector } from 'react-redux';

/**
 * используется для получения глобального состояния из хранилища
 */
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
