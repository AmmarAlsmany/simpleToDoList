// Shared TypeScript interfaces and types
// Export all types from this file for centralized type management

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppConfig {
  name: string;
  version: string;
  features: {
    calendar: boolean;
    celebrations: boolean;
    dragDrop: boolean;
  };
}

export type TaskFilter = 'all' | 'active' | 'completed';

export interface LocalStorageData {
  tasks: Task[];
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  animations: boolean;
  soundEffects: boolean;
}
