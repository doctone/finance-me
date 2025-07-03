# Personal Finance App - Development Guidelines

## Project Overview

A React-based personal finance application built with TypeScript, focusing on type safety, test-driven development, and maintainable code architecture.

## Technology Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **State Management**: React Context + useReducer (upgrading to Zustand if needed)
- **Routing**: React Router
- **Styling**: CSS Modules or Tailwind CSS

## Development Principles

### 1. Test-Driven Development (TDD)

- Write tests BEFORE implementing features
- Focus on testing behavior, not implementation details
- Use the Red-Green-Refactor cycle
- Maintain high test coverage (>90%)

### 2. Type Safety

- Use strict TypeScript configuration
- Define interfaces for all data structures
- Avoid `any` type - use proper type definitions
- Leverage TypeScript's advanced features (generics, discriminated unions, etc.)

### 3. Code Quality

- Follow React best practices and hooks rules
- Use functional components with hooks
- Implement proper error boundaries
- Write self-documenting code with clear naming

## Testing Guidelines

### Test Structure

```typescript
// Use AAA pattern: Arrange, Act, Assert
describe('ComponentName', () => {
  test('should do something when condition is met', () => {
    // Arrange
    const props = { ... };

    // Act
    render(<Component {...props} />);

    // Assert
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });
});
```

### Testing Priorities

1. **User Interactions**: Click, form submissions, navigation
2. **Data Flow**: Props, state changes, API calls
3. **Edge Cases**: Error states, loading states, empty states
4. **Accessibility**: Screen reader compatibility, keyboard navigation

## Git Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: New features (e.g., `feature/add-expense-tracking`)
- `bugfix/*`: Bug fixes
- `hotfix/*`: Critical production fixes

### Commit Messages

Follow conventional commits format:

```
type(scope): description

feat(expenses): add expense categorization
fix(auth): resolve login validation issue
test(budget): add budget calculation tests
```

## Code Organization

### Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── services/           # API calls and external services
├── stores/             # State management
├── pages/              # Page components
└── __tests__/          # Test utilities and setup
```

### Naming Conventions

- **Components**: PascalCase (`ExpenseForm.tsx`)
- **Hooks**: camelCase with `use` prefix (`useExpenseData.ts`)
- **Utilities**: camelCase (`formatCurrency.ts`)
- **Types**: PascalCase with descriptive names (`ExpenseItem`, `BudgetSummary`)

## Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Testing

```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Run Prettier
npm run typecheck    # Run TypeScript checks
```

### CI/CD

```bash
npm run ci           # Run full CI pipeline locally
```

## Financial Data Types

### Core Entities

```typescript
interface ExpenseItem {
  id: string;
  amount: number;
  description: string;
  category: ExpenseCategory;
  date: Date;
  paymentMethod: PaymentMethod;
}

interface BudgetItem {
  id: string;
  category: ExpenseCategory;
  budgetAmount: number;
  currentAmount: number;
  period: BudgetPeriod;
}
```

## Performance Guidelines

- Use React.memo for expensive components
- Implement proper loading states
- Use React.Suspense for code splitting
- Optimize re-renders with useMemo and useCallback
- Keep bundle size minimal

## Security Considerations

- Validate all user inputs
- Sanitize data before display
- Use secure HTTP-only cookies for authentication
- Implement proper error handling without exposing sensitive data
- Follow OWASP guidelines for web application security

## Accessibility

- Maintain semantic HTML structure
- Provide proper ARIA labels and roles
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## Notes

- Always run tests before committing
- Use feature flags for experimental features
- Document complex business logic
- Keep components small and focused
- Prefer composition over inheritance
