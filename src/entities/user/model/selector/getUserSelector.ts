import { StateSchema } from '@/app/providers/store';

export const getUser = (state:StateSchema) => state.userReducer?.user;
