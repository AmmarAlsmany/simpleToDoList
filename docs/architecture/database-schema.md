# Database Schema

**localStorage Structure (MVP):**
```json
{
  "simpletasks": {
    "tasks": [
      {
        "id": "uuid",
        "title": "string",
        "completed": "boolean",
        "important": "boolean",
        "createdAt": "ISO date",
        "completedAt": "ISO date | null",
        "scheduledDate": "ISO date | null",
        "scheduledTime": "HH:MM | null"
      }
    ],
    "settings": {
      "completionMethods": ["progress", "swipe", "click"],
      "celebrationEnabled": true,
      "reducedMotion": false
    },
    "version": "1.0.0"
  }
}
```

**Phase 2 Database Schema (PostgreSQL):**
```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  important BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP NULL,
  scheduled_date DATE NULL,
  scheduled_time TIME NULL,
  INDEX idx_completed (completed),
  INDEX idx_important (important),
  INDEX idx_scheduled (scheduled_date)
);
```
