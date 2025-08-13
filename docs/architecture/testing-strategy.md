# Testing Strategy

## Testing Pyramid
```
        E2E Tests (Playwright)
       /                    \
  Integration Tests (RTL)    
     /                    \
Frontend Unit (Jest)    Backend Unit (Jest)
```

## Test Organization

**Frontend Tests:**
```
src/
├── components/
│   └── __tests__/
├── hooks/
│   └── __tests__/
└── utils/
    └── __tests__/
```

## Test Examples

**Frontend Component Test:**
```typescript
describe('TaskCard', () => {
  it('completes task on progress bar hold', async () => {
    const onComplete = jest.fn();
    render(<TaskCard task={mockTask} onComplete={onComplete} />);
    
    const progressBar = screen.getByRole('progressbar');
    fireEvent.mouseDown(progressBar);
    
    await waitFor(() => {
      expect(onComplete).toHaveBeenCalledWith('progress');
    });
  });
});
```

**E2E Test:**
```typescript
test('user can create and complete task', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-testid="task-input"]', 'Buy groceries');
  await page.press('[data-testid="task-input"]', 'Enter');
  
  const taskCard = page.locator('[data-testid="task-card"]').first();
  const progressBar = taskCard.locator('[data-testid="progress-bar"]');
  
  await progressBar.press('Space', { delay: 2000 });
  await expect(page.locator('[data-testid="celebration"]')).toBeVisible();
});
```
