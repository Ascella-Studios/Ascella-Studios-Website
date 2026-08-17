import type { ReactNode } from 'react';

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
} as const;

interface ContainerProps {
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

export default function Container({ size = 'lg', className = '', children }: ContainerProps) {
  return (
    <div className={`mx-auto ${sizes[size]} px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
