import { getApiUrl } from '@/config';

import { UserApiResponse, UsersApiResponse } from '../types';

export class UserApi {

    static async getUserById(id: string): Promise<UserApiResponse> {
        if (!id) {
            throw new Error('User ID is required');
        }

        try {
            const response = await fetch(getApiUrl(`users/${id}`), {
                next: { revalidate: 60 }
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`User with ID "${id}" not found`);
                }
                throw new Error(`Failed to fetch user: ${response.statusText}`);
            }

            return await response.json();
        } catch (err: unknown) {
            console.error(`Error fetching user ${id}:`, err);
            throw err;
        }
    }

    static async getUsers(): Promise<UsersApiResponse> {
        try {
            const response = await fetch(getApiUrl('users'), {
                next: { revalidate: 60 }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch users: ${response.statusText}`);
            }

            return await response.json();
        } catch (err: unknown) {
            console.error('Error fetching users:', err);
            throw err;
        }
    }
}