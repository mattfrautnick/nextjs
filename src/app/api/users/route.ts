import { NextResponse } from 'next/server';

import { users } from "@/lib/data/users";
import { UsersApiResponse } from '@/lib/types';
import { User } from '@/lib/types';

export async function GET(): Promise<NextResponse<UsersApiResponse>> {
    try {
        return NextResponse.json({
            success: true,
            data: {
                users: users as User[]
            },

        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                { success: false, error: 'Internal server error: ' + error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
