import Link from 'next/link';
import { Category } from '@/types';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  showIcon?: boolean;
  className?: string;
}

export default function CategoryBadge({ 
  category, 
  size = 'md',
  variant = 'default',
  showIcon = true,
  className = ""
}: CategoryBadgeProps) {
  if (!category) {
    return null;
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const baseClasses = `inline-flex items-center gap-1 rounded-full font-medium transition-colors duration-200 hover:shadow-md ${sizeClasses[size]}`;
  
  // Use category color if available, otherwise default colors
  const categoryColor = category.metadata?.color || '#6B7280';
  
  const variantClasses = variant === 'outline' 
    ? `border-2 text-gray-700 hover:bg-gray-50`
    : `text-white hover:opacity-90`;

  const style = variant === 'outline' 
    ? { borderColor: categoryColor, color: categoryColor }
    : { backgroundColor: categoryColor };

  return (
    <Link href={`/categories/${category.slug}`}>
      <span 
        className={`${baseClasses} ${variantClasses} ${className}`}
        style={style}
      >
        {showIcon && (
          <span className="text-current">🏷️</span>
        )}
        <span>{category.metadata?.name || category.title}</span>
      </span>
    </Link>
  );
}