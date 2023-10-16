import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

export function useThunk<T>(actions: T): T {
    const dispatch = useDispatch();
    return bindActionCreators(actions as any, dispatch);
}
