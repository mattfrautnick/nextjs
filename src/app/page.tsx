import { UserList, PageContainer, ErrorDisplay } from '@/components/common';
import { UserApi } from '@/lib/api';

async function getUsersData() {
    try {
        const response = await UserApi.getUsers();
        
        if (response.success && response.data) {
            return {
                users: response.data.users || [],
                error: null
            };
        } else {
            return {
                users: [],
                error: response.error || 'Failed to fetch users'
            };
        }
    } catch (error) {
        const err = error as { message?: string };
        return {
            users: [],
            error: err.message || 'An error occurred while fetching users'
        };
    }
}

export default async function Home() {
    const { users, error } = await getUsersData();

    if (error) {
        return <ErrorDisplay title="Error" message={error} />;
    }

    return (
        <PageContainer>
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            <UserList users={users} />
        </PageContainer>
    );
}