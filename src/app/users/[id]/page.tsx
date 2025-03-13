import Link from 'next/link';
import { notFound } from 'next/navigation';

import { UserCard } from '@/app/users/[id]/_components';
import { UserList } from '@/components/common';
import { ErrorDisplay, PageContainer } from '@/components/common';
import { UserApi } from '@/lib/api';
import { isValidUser } from '@/lib/utils/validation';

async function getUserData(id: string) {
    try {
        const response = await UserApi.getUserById(id);

        if (response.success && response.data) {
            if (isValidUser(response.data.user)) {
                return {
                    user: response.data.user,
                    friends: response.data.friends || [],
                    error: null
                };
            } else {
                return {
                    user: null,
                    friends: [],
                    error: 'Invalid user'
                };
            }
        } else {
            return {
                user: null,
                friends: [],
                error: response.error || 'Failed to fetch user data'
            };
        }
    } catch (error) {
        const err = error as { status?: number; message?: string };
        if (err.status === 404) {
            return notFound();
        }
        return {
            user: null,
            friends: [],
            error: err.message || 'An error occurred'
        };
    }
}

export default async function UserProfile({ params }: { params: { id: string } }) {
    const { id } = await params;
    const { user, friends, error } = await getUserData(id);

    if (error) {
        return <ErrorDisplay title="Error" message={error} />;
    }

    if (!user) {
        return <ErrorDisplay title="Error" message="User not found" />;
    }

    return (
        <PageContainer>
            <Link href="/" className="inline-block mb-6 underline">
                ← Back to Users
            </Link>

            <UserCard user={user}/>

            <div className="mt-8">
                <UserList users={friends} title="Friends" />
            </div>
        </PageContainer>
    );
}