interface EnvironmentConfig {
  apiBaseUrl: string;
  environment: 'development' | 'production' | 'test';
}

export const config: EnvironmentConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  environment: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
};

export function getApiUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  if (config.apiBaseUrl) {
    return `${config.apiBaseUrl}/api/${cleanPath}`;
  } else {
    return `/api/${cleanPath}`;
  }
}
