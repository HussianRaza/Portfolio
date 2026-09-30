import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath(path: string = ''): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return basePath || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!basePath) return cleanPath;
  const cleanBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const normalizedBase = cleanBase.startsWith('/') ? cleanBase : `/${cleanBase}`;
  return `${normalizedBase}${cleanPath}`;
}
