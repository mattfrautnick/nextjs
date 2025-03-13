import { NextResponse } from 'next/server';

import { friendships } from "@/lib/data/friendships";
import { users } from "@/lib/data/users";
import { UserApiResponse } from '@/lib/types';

export async function GET(
    request: Request,
    context: { params: { id: string } }
): Promise<NextResponse<UserApiResponse>> {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json({
                success: false,
                error: 'User ID is required'
            }, { status: 400 });
        }

        const user = users.find(user => user.id === id);
        if (!user) {
            return NextResponse.json({
                success: false,
                error: 'User not found'
            }, { status: 404 });
        }

        const friendIds = friendships[id] || [];
        const friends = users.filter(u => friendIds.includes(u.id));

        return NextResponse.json({
            success: true,
            data: {
                user,
                friends
            }
        });

    } catch (error) {
        console.error('Error fetching user:', error);

        let status = 500;
        let message = 'Internal server error';

        if (error instanceof Error) {
            if (error.message.includes('required') || error.message.includes('Invalid')) {
                status = 400;
                message = error.message;
            } else if (error.message.includes('not found')) {
                status = 404;
                message = error.message;
            }

            console.error(`API Error (${status}): ${message}`, {
                path: `/api/users/${context.params?.id || 'unknown'}`,
                error: error.stack
            });
        }

        return NextResponse.json({
            success: false,
            error: message
        }, { status });
    }
}