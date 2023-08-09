import { IUser } from './user';

export interface UserSchema {
    user:IUser | null;
    role: 'quest' | 'regular'
}
