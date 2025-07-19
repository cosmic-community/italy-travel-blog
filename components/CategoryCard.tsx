import Link from 'next/link'
import { CategoryCardProps } from '@/types'

export default function CategoryCard({ category, className = "" }: CategoryCardProps) {
  const categoryColor = category.metadata?.color || '#8B4513'

  return (
    <Link 
      href={`/categories/${category.slug}`}
      className={`card hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div 
        className="h-24 relative overflow-hidden"
        style={{ backgroundColor: categoryColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
        <div className="absolute bottom-4 left-4">
          <span className="text-white text-sm font-medium">
            {category.metadata?.name || category.title}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {category.title}
        </h3>
        
        {category.metadata?.description && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {category.metadata.description}
          </p>
        )}
      </div>
    </Link>
  )
}