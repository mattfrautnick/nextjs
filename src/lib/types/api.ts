import { User } from './user';

export type ApiResponse<T = unknown> = {
    success: boolean;
    data?: T;
    error?: string;
};

export type UserResponse = {
    user: User;
    friends: User[];
};

export type UsersResponse = {
    users: User[];
}

export type UserApiResponse = ApiResponse<UserResponse>;
export type UsersApiResponse = ApiResponse<UsersResponse>;