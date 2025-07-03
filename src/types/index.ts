export interface ExpenseItem {
  id: string;
  amount: number;
  description: string;
  category: ExpenseCategory;
  date: Date;
  paymentMethod: PaymentMethod;
  tags?: string[];
  recurring?: boolean;
  recurringPeriod?: RecurringPeriod;
}

export interface BudgetItem {
  id: string;
  category: ExpenseCategory;
  budgetAmount: number;
  currentAmount: number;
  period: BudgetPeriod;
  alertThreshold?: number;
}

export interface IncomeItem {
  id: string;
  amount: number;
  source: string;
  date: Date;
  recurring?: boolean;
  recurringPeriod?: RecurringPeriod;
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  priority: GoalPriority;
  category: GoalCategory;
}

export type ExpenseCategory =
  | 'housing'
  | 'transportation'
  | 'food'
  | 'utilities'
  | 'insurance'
  | 'healthcare'
  | 'savings'
  | 'personal'
  | 'entertainment'
  | 'education'
  | 'miscellaneous';

export type PaymentMethod =
  | 'cash'
  | 'credit_card'
  | 'debit_card'
  | 'bank_transfer'
  | 'digital_wallet'
  | 'check';

export type BudgetPeriod = 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export type RecurringPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type GoalPriority = 'low' | 'medium' | 'high' | 'critical';

export type GoalCategory =
  | 'emergency_fund'
  | 'retirement'
  | 'vacation'
  | 'major_purchase'
  | 'debt_payoff'
  | 'investment';
