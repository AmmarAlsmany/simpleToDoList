# Data Models

Based on the PRD requirements and UX specifications, I've identified the core business entities that will be shared between frontend state management and future backend services:

## Task

**Purpose:** Core entity representing a user's todo item with completion tracking, priority classification, and scheduling capabilities.

**Key Attributes:**
- id: string (UUID) - Unique identifier for reliable localStorage operations and future backend sync
- title: string (max 200 chars) - User-entered task description with validation
- completed: boolean - Completion status for filtering and celebration triggers
- important: boolean - Binary priority system (important/not-important) for simple decision making
- createdAt: Date - Timestamp for chronological sorting and analytics
- completedAt: Date | null - Completion timestamp for celebration system and progress tracking
- scheduledDate: Date | null - Calendar integration date for drag-and-drop scheduling
- scheduledTime: string | null - Time slot for timed calendar events ("09:00", "14:30")
- completionMethod: 'progress' | 'swipe' | 'click' | null - Track user preference patterns
- celebrationType: 'confetti' | 'checkmark' | 'fireworks' | 'badge' | null - Last celebration used

### TypeScript Interface
```typescript
interface Task {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
  createdAt: Date;
  completedAt: Date | null;
  scheduledDate: Date | null;
  scheduledTime: string | null;
  completionMethod: CompletionMethod | null;
  celebrationType: CelebrationType | null;
}

type CompletionMethod = 'progress' | 'swipe' | 'click';
type CelebrationType = 'confetti' | 'checkmark' | 'fireworks' | 'badge';
```

### Relationships
- Task belongs to User (future - implicit via localStorage for MVP)
- Task can have multiple CompletionEvents (analytics)
- Task can be shared via SocialShare (optional)

## ApplicationState

**Purpose:** Root state container managing all client-side data with optimistic updates and localStorage synchronization.

**Key Attributes:**
- tasks: Task[] - Array of all user tasks with efficient filtering and sorting
- settings: UserSettings - User preferences for completion methods, celebrations, and accessibility
- ui: UIState - Transient state for drag operations, celebrations, and form inputs
- lastSync: Date - Timestamp for future backend synchronization
- version: string - Data schema version for migration compatibility

### TypeScript Interface
```typescript
interface ApplicationState {
  tasks: Task[];
  settings: UserSettings;
  ui: UIState;
  lastSync: Date;
  version: string;
}

interface UserSettings {
  completionMethods: CompletionMethod[];
  celebrationEnabled: boolean;
  reducedMotion: boolean;
  socialSharingEnabled: boolean;
  autoExportEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
}

interface UIState {
  taskBeingCreated: Partial<Task> | null;
  dragState: DragState;
  celebrationState: CelebrationState;
  selectedDate: Date;
  calendarView: 'week' | 'month';
  taskFilter: TaskFilter;
}
```

### Relationships
- ApplicationState contains Tasks collection
- ApplicationState manages UserSettings
- ApplicationState controls UIState for transient interactions

## CompletionEvent

**Purpose:** Analytics tracking for user interaction patterns and completion method effectiveness (future backend feature).

**Key Attributes:**
- id: string - Unique event identifier
- taskId: string - Reference to completed task
- method: CompletionMethod - How task was completed
- duration: number - Time taken to complete (milliseconds)
- timestamp: Date - When completion occurred
- celebrationShown: boolean - Whether celebration was displayed

### TypeScript Interface
```typescript
interface CompletionEvent {
  id: string;
  taskId: string;
  method: CompletionMethod;
  duration: number;
  timestamp: Date;
  celebrationShown: boolean;
  gestureData?: GestureData;
}

interface GestureData {
  swipeDistance?: number;
  swipeVelocity?: number;
  progressHoldDuration?: number;
  deviceType: 'desktop' | 'tablet' | 'mobile';
}
```

### Relationships
- CompletionEvent belongs to Task (many-to-one)
- CompletionEvent aggregates into usage analytics

**Detailed Rationale:**
- **Design Decisions:** UUID identifiers prepare for backend sync without conflicts; Date objects over timestamps for easier manipulation
- **Trade-offs:** Rich task model vs simplicity - chose comprehensive model to avoid future migrations
- **Backend Compatibility:** All models designed for direct JSON serialization and REST API compatibility
- **Performance Considerations:** Task array optimized for filtering/sorting operations common in UI
