// Shared application constants
// Export all constants from this file for centralized constant management

export const APP_CONFIG = {
  NAME: 'SimpleTasks',
  VERSION: '1.0.0',
  MAX_TASKS: 1000,
  LOCAL_STORAGE_KEY: 'simpletasks_data',
  PREFERENCES_KEY: 'simpletasks_preferences',
} as const;

export const TASK_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;

export const KEYBOARD_SHORTCUTS = {
  NEW_TASK: 'n',
  TOGGLE_ALL: 'a',
  CLEAR_COMPLETED: 'c',
  FOCUS_FILTER: 'f',
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;
