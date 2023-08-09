import { createReduxStore } from '@/app/providers/store/config/createReduxStore';
import { UserSchema } from '@/entities/user';

export interface StateSchema {
    userReducer:UserSchema
}

export type AppDispatch = ReturnType<typeof createReduxStore<StateSchema>>['dispatch'];
export type ThunkAction = (dispatch: AppDispatch, getState: () => StateSchema) => void

// export interface ThunkConfig<T> {
//     rejectValue: T;
//     extra: ThunkExtraArg;
//     state: StateSchema;
// }
