import { createReduxStore } from '@/app/providers/store/config/createReduxStore';
import { CategorySchema } from '@/entities/category';
import { UserSchema } from '@/entities/user';

export interface StateSchema {
    userReducer:UserSchema,
    categoryReducer: CategorySchema,
}

export type AppDispatch = ReturnType<typeof createReduxStore<StateSchema>>['dispatch'];
export type ThunkAction = (dispatch: AppDispatch, getState: () => StateSchema) => void

// export interface ThunkConfig<T> {
//     rejectValue: T;
//     extra: ThunkExtraArg;
//     state: StateSchema;
// }
