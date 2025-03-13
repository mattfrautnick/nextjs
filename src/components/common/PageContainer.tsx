'use client';

import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
}

export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {title && (
          <h1 className="text-3xl font-bold mb-8 text-gray-900">
            {title}
          </h1>
        )}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
