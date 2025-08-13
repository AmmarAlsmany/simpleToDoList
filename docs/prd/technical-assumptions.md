# Technical Assumptions

## Repository Structure: Monorepo
Single repository containing all frontend components, utilities, and configuration. Enables atomic commits across features and simplified dependency management for this focused web application.

## Service Architecture
**Client-side only monolith** for MVP phase. All functionality runs in browser with localStorage persistence. No backend services or APIs required initially. Modular component architecture allows future backend integration without major refactoring.

**Component Architecture (Atomic Design):**
- atoms/ (Button, Input, TaskCard, CalendarDay)
- molecules/ (TaskList, CalendarGrid, CompletionCelebration)  
- organisms/ (Dashboard, TaskCreator, SettingsPanel)
- templates/ (MainLayout, EmptyState)
- pages/ (HomePage)

## Testing Requirements
**Unit + Integration testing approach** with focus on component behavior and user interaction flows. Jest for unit tests, React Testing Library for integration tests, manual testing convenience methods for drag-and-drop and animation validation.

**Comprehensive Testing Strategy:**
- **Unit Testing:** Pure functions, custom hooks, component logic with Jest
- **Integration Testing:** User workflows, drag-and-drop, animation states with React Testing Library
- **E2E Testing:** Critical paths, cross-browser testing, performance measurements with Playwright
- **Manual Testing Tools:** Task generator utility, animation debugger, drag simulator

## Technology Stack
**Frontend Framework:** React 18+ with TypeScript for concurrent features, excellent ecosystem, and type safety for complex gesture handling

**Core Libraries:**
- **Build Tool:** Vite for fast development and optimized production builds
- **Styling:** Tailwind CSS with custom design tokens for rapid UI development
- **Animation:** Framer Motion for celebration animations and micro-interactions (GPU-accelerated)
- **Calendar:** FullCalendar.js for drag-and-drop calendar functionality
- **Drag-and-Drop:** @dnd-kit/core for modern, accessible drag operations
- **State Management:** React Context + useReducer (sufficient for MVP scope)
- **Date Utilities:** date-fns for lightweight, tree-shakable date manipulation
- **Storage:** localStorage API with JSON serialization, IndexedDB migration path

**Development Tools:**
- **Testing:** Jest + React Testing Library + MSW for API mocking preparation
- **Code Quality:** ESLint + Prettier + Husky pre-commit hooks
- **Type Safety:** TypeScript with strict configuration
- **Bundling:** ES modules with tree-shaking, code-splitting for performance

## Performance Engineering
**Critical Performance Budgets:**
- Initial Load: < 2s on 3G connection
- Task Creation: < 100ms response time  
- Drag Operations: 60fps maintained during all interactions
- Celebration Animations: < 16ms frame time for smooth 60fps

**Optimization Strategies:**
- Code splitting for celebration animations and settings panel
- Virtual scrolling for large task lists (react-window)
- React.memo for TaskCard, useMemo for filtered lists
- Bundle analysis with Webpack Bundle Analyzer

## Security & Privacy
**Client-side Security:**
- localStorage encryption using Web Crypto API for sensitive content
- DOMPurify for XSS prevention, CSP headers implementation
- Content sanitization for social sharing, privacy confirmation dialogs
- HTTPS enforcement for Web Share API and service workers

## Deployment Strategy
**CI/CD Pipeline:** GitHub Actions → Type checking → Linting → Testing → Build → Deploy to Netlify/Vercel

**Hosting Strategy:**
- Primary: Netlify for zero-config deployment and branch previews
- Backup: Vercel with identical configuration
- CDN: Automatic edge distribution for global performance

## Scalability Roadmap
**Phase 1 (Current):** Client-only with localStorage
**Phase 2:** Hybrid with optional cloud sync using API-ready repository patterns
**Phase 3:** Full backend with real-time collaboration and AI features

**Database Evolution:** localStorage → IndexedDB → Cloud Database with migration utilities

## Additional Technical Assumptions and Requests
- **Browser Support:** Modern evergreen browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Offline-first:** Progressive Web App capabilities with service worker for offline functionality
- **Accessibility:** WCAG AA compliance testing with axe-core integration in test suite
- **Development Environment:** Dev containers for consistency, Storybook for component development
- **Documentation:** Component documentation, Architecture Decision Records, API documentation preparation
