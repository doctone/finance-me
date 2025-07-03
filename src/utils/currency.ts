export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const parseCurrency = (currencyString: string): number => {
  const cleaned = currencyString.replace(/[^-\d.]/g, '');
  return parseFloat(cleaned) || 0;
};

export const formatPercentage = (value: number, decimals = 1): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};
