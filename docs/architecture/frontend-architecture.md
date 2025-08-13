# Frontend Architecture

## Component Architecture

**Component Organization:**
```
src/components/
├── atoms/
│   ├── Button.tsx
│   ├── Input.tsx  
│   ├── ProgressBar.tsx
│   └── Icon.tsx
├── molecules/
│   ├── TaskCard.tsx
│   ├── TaskList.tsx
│   └── CalendarDay.tsx
├── organisms/
│   ├── Dashboard.tsx
│   ├── TaskPanel.tsx
│   └── CalendarPanel.tsx
└── templates/
    └── MainLayout.tsx
```

**Component Template:**
```typescript
interface TaskCardProps {
  task: Task;
  onComplete: (method: CompletionMethod) => void;
  draggable?: boolean;
}

export const TaskCard = memo<TaskCardProps>(({ 
  task, 
  onComplete, 
  draggable = true 
}) => {
  const { startDrag } = useDragAndDrop();
  const { progressHold } = useGestureHandlers();
  
  return (
    <div 
      className="task-card"
      {...(draggable && startDrag(task))}
    >
      <TaskHeader task={task} />
      <ProgressBar 
        onComplete={() => onComplete('progress')}
        {...progressHold}
      />
    </div>
  );
});
```

## State Management Architecture

**State Structure:**
```typescript
interface AppState {
  tasks: Task[];
  ui: {
    draggedTask: Task | null;
    celebrationActive: boolean;
    selectedDate: Date;
  };
  settings: UserSettings;
}

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TASK_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.taskId
            ? { ...task, completed: true, completedAt: new Date() }
            : task
        ),
        ui: { ...state.ui, celebrationActive: true }
      };
    // ... other cases
  }
};
```

## Routing Architecture

**Route Organization:**
```
/                  - Main dashboard (task list + calendar)
/settings         - User preferences and export
/help             - Gesture tutorials and help
```
