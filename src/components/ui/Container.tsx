import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size = 'xl',
  ...props
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('container', sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
