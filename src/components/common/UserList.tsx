'use client';

import { ChevronRightIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation';

import { User } from '@/lib/types';

interface UserListProps {
  users: User[];
  title?: string;
}

export function UserList({ users, title }: UserListProps) {
  const router = useRouter();

  const handleUserClick = (userId: string) => {
    router.push(`/users/${userId}`);
  };

  return (
    <div>
      {title && (
        <h2 className="text-xl font-semibold mb-6 text-gray-900">
          {title}
        </h2>
      )}
      
      {users.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 rounded-lg border border-gray-200">
          <UserIcon className="w-12 h-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600">No users found</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {users.map((user) => (
            <li 
              key={user.id}
              onClick={() => handleUserClick(user.id)}
              className="group bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                    {user.name}
                  </h3>
                  {user.title && (
                    <p className="text-sm text-gray-500 truncate">
                      {user.title}
                    </p>
                  )}
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
