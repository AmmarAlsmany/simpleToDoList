# Coding Standards

## Critical Fullstack Rules
- **Type Sharing:** Always define types in packages/shared and import from there
- **State Updates:** Never mutate state directly - use proper useReducer patterns  
- **Performance First:** All animations must maintain 60fps - use transform/opacity only
- **Accessibility Required:** All interactive elements need proper ARIA labels and keyboard navigation
- **Error Boundaries:** Wrap all major components in error boundaries with user-friendly fallbacks
- **Local Storage Safety:** Always validate and sanitize localStorage data with Zod schemas

## Naming Conventions
| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| Components | PascalCase | - | `TaskCard.tsx` |
| Hooks | camelCase with 'use' | - | `useTaskOperations.ts` |
| Functions | camelCase | camelCase | `createTask` |
| Constants | SCREAMING_SNAKE_CASE | SCREAMING_SNAKE_CASE | `MAX_TASKS_COUNT` |
