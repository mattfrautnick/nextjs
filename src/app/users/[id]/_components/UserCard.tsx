import { MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

import { User } from '@/lib/types';

export function UserCard({ user }: { user: User }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                        <p className="text-gray-600">@{user.username}</p>
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    {user.location && (
                        <div className="flex items-center text-gray-600">
                            <MapPinIcon className="w-5 h-5 mr-2" />
                            {user.location}
                        </div>
                    )}
                    {user.title && (
                        <div className="flex items-center text-gray-600">
                            <BriefcaseIcon className="w-5 h-5 mr-2" />
                            {user.title}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
