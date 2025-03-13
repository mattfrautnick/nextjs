import { User } from '../types';

export function isValidUser(user: User): boolean {
    return typeof user === 'object' &&
        user.id !== undefined &&
        user.username !== undefined &&
        user.name !== undefined &&
        user.location !== undefined &&
        user.title !== undefined;
}