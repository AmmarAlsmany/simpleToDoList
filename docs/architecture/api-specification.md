# API Specification

**MVP Phase:** No API required - SimpleTasks uses client-side only architecture with localStorage persistence.

**Phase 2 Planned API (REST):** The following specification defines the future REST API that will be implemented using Netlify Functions when backend features are needed:

## REST API Specification

```yaml
openapi: 3.0.0
info:
  title: SimpleTasks API
  version: 2.0.0
  description: |
    RESTful API for SimpleTasks application enabling cloud sync, backup, and collaboration features.
    Designed to seamlessly integrate with existing localStorage-based frontend.
servers:
  - url: https://api.simpletasks.app
    description: Production API
  - url: https://staging-api.simpletasks.app
    description: Staging environment
paths:
  /tasks:
    get:
      summary: Get user tasks
      parameters:
        - name: completed
          in: query
          schema:
            type: boolean
          description: Filter by completion status
        - name: important
          in: query
          schema:
            type: boolean
          description: Filter by priority
        - name: scheduled
          in: query
          schema:
            type: boolean
          description: Filter scheduled vs unscheduled tasks
        - name: since
          in: query
          schema:
            type: string
            format: date-time
          description: Get tasks modified since timestamp (for sync)
      responses:
        '200':
          description: Tasks retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  tasks:
                    type: array
                    items:
                      $ref: '#/components/schemas/Task'
                  lastSync:
                    type: string
                    format: date-time
    post:
      summary: Create new task
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateTaskRequest'
      responses:
        '201':
          description: Task created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
  /tasks/{taskId}:
    put:
      summary: Update task
      parameters:
        - name: taskId
          in: path
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateTaskRequest'
      responses:
        '200':
          description: Task updated successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
    delete:
      summary: Delete task
      parameters:
        - name: taskId
          in: path
          required: true
          schema:
            type: string
      responses:
        '204':
          description: Task deleted successfully
  /tasks/{taskId}/complete:
    post:
      summary: Mark task as completed with analytics
      parameters:
        - name: taskId
          in: path
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CompleteTaskRequest'
      responses:
        '200':
          description: Task completed successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
  /sync:
    post:
      summary: Sync localStorage data with cloud
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                localTasks:
                  type: array
                  items:
                    $ref: '#/components/schemas/Task'
                lastSync:
                  type: string
                  format: date-time
      responses:
        '200':
          description: Sync completed
          content:
            application/json:
              schema:
                type: object
                properties:
                  tasks:
                    type: array
                    items:
                      $ref: '#/components/schemas/Task'
                  conflicts:
                    type: array
                    items:
                      $ref: '#/components/schemas/SyncConflict'
  /export:
    get:
      summary: Export user data
      parameters:
        - name: format
          in: query
          schema:
            type: string
            enum: [json, csv]
      responses:
        '200':
          description: Data exported successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExportData'
            text/csv:
              schema:
                type: string

components:
  schemas:
    Task:
      type: object
      properties:
        id:
          type: string
          format: uuid
        title:
          type: string
          maxLength: 200
        completed:
          type: boolean
        important:
          type: boolean
        createdAt:
          type: string
          format: date-time
        completedAt:
          type: string
          format: date-time
          nullable: true
        scheduledDate:
          type: string
          format: date
          nullable: true
        scheduledTime:
          type: string
          pattern: '^([0-1][0-9]|2[0-3]):[0-5][0-9]$'
          nullable: true
        completionMethod:
          type: string
          enum: [progress, swipe, click]
          nullable: true
        celebrationType:
          type: string
          enum: [confetti, checkmark, fireworks, badge]
          nullable: true
      required:
        - id
        - title
        - completed
        - important
        - createdAt
    CreateTaskRequest:
      type: object
      properties:
        title:
          type: string
          maxLength: 200
        important:
          type: boolean
          default: false
        scheduledDate:
          type: string
          format: date
          nullable: true
        scheduledTime:
          type: string
          nullable: true
      required:
        - title
    UpdateTaskRequest:
      type: object
      properties:
        title:
          type: string
          maxLength: 200
        important:
          type: boolean
        scheduledDate:
          type: string
          format: date
          nullable: true
        scheduledTime:
          type: string
          nullable: true
    CompleteTaskRequest:
      type: object
      properties:
        completionMethod:
          type: string
          enum: [progress, swipe, click]
        celebrationType:
          type: string
          enum: [confetti, checkmark, fireworks, badge]
        gestureData:
          type: object
          properties:
            duration:
              type: number
            swipeDistance:
              type: number
            deviceType:
              type: string
              enum: [desktop, tablet, mobile]
    SyncConflict:
      type: object
      properties:
        taskId:
          type: string
        localVersion:
          $ref: '#/components/schemas/Task'
        serverVersion:
          $ref: '#/components/schemas/Task'
        conflictType:
          type: string
          enum: [both_modified, deleted_locally, deleted_remotely]
    ExportData:
      type: object
      properties:
        tasks:
          type: array
          items:
            $ref: '#/components/schemas/Task'
        exportedAt:
          type: string
          format: date-time
        version:
          type: string
```

**API Design Principles:**
1. **localStorage Compatibility:** All endpoints map directly to localStorage operations used in MVP
2. **Sync Strategy:** Conflict resolution for offline-first to online-first migration  
3. **Analytics Integration:** Completion events capture gesture data for UX improvements
4. **Progressive Enhancement:** API optional - app works without backend connectivity

**Authentication Strategy (Phase 2):**
- JWT tokens with refresh mechanism
- Optional anonymous usage with device-based identification
- Social login integration (Google, GitHub) for user convenience
