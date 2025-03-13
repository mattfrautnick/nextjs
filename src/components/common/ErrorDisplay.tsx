import Link from 'next/link';

export function ErrorDisplay({
    title = 'Error',
    message,
    showBackLink = true
}: {
    title?: string;
    message: string;
    showBackLink?: boolean;
}) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {showBackLink && (
                <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors">
                    ← Back to Users
                </Link>
            )}

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
                <h1 className="text-2xl font-bold text-blue-800 mb-4">{title}</h1>
                <p className="text-blue-800 text-lg font-medium">{message}</p>
            </div>
        </div>
    );
}
