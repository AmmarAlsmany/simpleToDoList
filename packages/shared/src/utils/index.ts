// Shared utility functions
// Export all utilities from this file for centralized utility management

import { format, isToday, isThisWeek } from 'date-fns';

export const generateId = (): string => {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const formatDate = (date: Date, pattern = 'MMM d, yyyy'): string => {
  return format(date, pattern);
};

export const isTaskRecent = (date: Date): boolean => {
  return isToday(date) || isThisWeek(date);
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
};
