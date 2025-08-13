# Core Workflows

```mermaid
sequenceDiagram
    participant User
    participant TaskCard
    participant GestureSystem
    participant CelebrationEngine
    participant SocialShare
    
    User->>TaskCard: Hold progress bar
    TaskCard->>GestureSystem: Start progress hold
    GestureSystem->>GestureSystem: Animate 0-100%
    User->>GestureSystem: Release at 100%
    GestureSystem->>TaskCard: Mark complete
    TaskCard->>CelebrationEngine: Trigger celebration
    CelebrationEngine->>User: Show confetti animation
    CelebrationEngine->>SocialShare: Offer share dialog
    User->>SocialShare: Share achievement
    SocialShare->>User: Share confirmation
```
