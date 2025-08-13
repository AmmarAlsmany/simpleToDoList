# Tech Stack

This is the **DEFINITIVE technology selection** for SimpleTasks. All development must use these exact versions and technologies.

## Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Frontend Language | TypeScript | 5.0+ | Type safety for complex gesture handling and state management | Prevents runtime errors in drag-and-drop and animation logic |
| Frontend Framework | React | 18.2+ | Component-based UI with concurrent features for smooth animations | Concurrent features enable 60fps performance during celebrations |
| UI Component Library | Headless UI | 1.7+ | Accessible components with custom styling freedom | WCAG AA compliance built-in, works seamlessly with Tailwind |
| State Management | React Context + useReducer | Built-in | Centralized state without external dependencies | Sufficient for MVP scope, easy backend migration path |
| Backend Language | N/A (Client-only) | - | MVP phase uses client-side only architecture | Eliminates infrastructure complexity for rapid MVP delivery |
| Backend Framework | N/A (Client-only) | - | Future: Netlify Functions | Clear migration path to serverless when backend needed |
| API Style | N/A (Client-only) | - | Future: REST API | localStorage operations will map directly to REST endpoints |
| Database | localStorage | Browser API | Client-side persistence with export functionality | No server setup required, immediate usability |
| Cache | Browser Cache | Service Worker API | Offline functionality and asset caching | Enables offline-first experience for PWA |
| File Storage | localStorage + Export | Browser API | Task data with JSON/CSV backup options | User controls their data, prevents vendor lock-in |
| Authentication | N/A (Client-only) | - | Future: Auth0/Supabase | No accounts required for MVP simplicity |
| Frontend Testing | Jest + React Testing Library | Jest 29+, RTL 13+ | Unit and integration testing for components and gestures | Comprehensive testing for drag-drop and animation interactions |
| Backend Testing | N/A (Client-only) | - | Future: Jest + Supertest | Testing strategy ready for Phase 2 API development |
| E2E Testing | Playwright | 1.35+ | Critical path automation and gesture testing | Cross-browser gesture support validation |
| Build Tool | Vite | 4.4+ | Fast development and optimized production builds | Superior performance for React development vs Webpack |
| Bundler | Vite (Built-in) | 4.4+ | ES modules with tree-shaking for performance | Meets <2s load time requirement with automatic optimization |
| IaC Tool | N/A (Static hosting) | - | Future: Terraform/AWS CDK | Simple Netlify deployment for MVP, scalable IaC for Phase 2 |
| CI/CD | GitHub Actions | Latest | Automated testing, linting, and Netlify deployment | Seamless integration with Netlify and npm workspace monorepo |
| Monitoring | Web Vitals + Custom | web-vitals 3+ | Client-side performance monitoring for 60fps requirement | Essential for tracking animation performance and localStorage reliability |
| Logging | Console + Sentry (Errors) | Sentry 7+ | Error tracking without backend logging infrastructure | Catches client-side errors and performance issues |
| CSS Framework | Tailwind CSS | 3.3+ | Utility-first styling with custom design tokens | Rapid UI development matching UX specification design system |

**Additional Core Libraries:**
- **Animation:** Framer Motion 10.16+ for GPU-accelerated celebration animations
- **Calendar:** FullCalendar 6.1+ for drag-and-drop scheduling integration  
- **Drag-and-Drop:** @dnd-kit/core 6.0+ for accessible, modern drag operations
- **Date Utilities:** date-fns 2.30+ for lightweight, tree-shakable date manipulation
- **Storage:** Custom localStorage wrapper with JSON serialization and quota monitoring

**Development Tools:**
- **Code Quality:** ESLint 8+ + Prettier 3+ + Husky pre-commit hooks
- **Type Safety:** TypeScript strict configuration with path aliases
- **Component Development:** Storybook 7+ for isolated component development and testing

**Detailed Rationale:**
- **Technology Selection Strategy:** Prioritized proven technologies with excellent documentation for single-developer velocity
- **Performance Focus:** Every choice optimized for 60fps animations and <2s load times
- **Accessibility Foundation:** Headless UI + proper semantic HTML ensures WCAG AA compliance
- **Migration Planning:** Architecture anticipates Phase 2 backend with minimal technology stack changes
