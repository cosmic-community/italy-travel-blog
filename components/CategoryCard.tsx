import Link from 'next/link'
import { CategoryCardProps } from '@/types'

export default function CategoryCard({ category, className = "" }: CategoryCardProps) {
  const categoryColor = category.metadata?.color || '#8B4513'
  const heroImage = category.metadata?.hero_image

  return (
    <Link 
      href={`/categories/${category.slug}`}
      className={`card hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden ${className}`}
    >
      <div className="h-48 relative overflow-hidden">
        {heroImage ? (
          <>
            <img
              src={`${heroImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={category.metadata?.name || category.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </>
        ) : (
          <div 
            className="w-full h-full bg-gradient-to-br from-opacity-80 to-opacity-100"
            style={{ backgroundColor: categoryColor }}
          />
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-white text-sm font-medium bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
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