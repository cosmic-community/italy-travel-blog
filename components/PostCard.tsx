import Link from 'next/link'
import { PostCardProps } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'

export default function PostCard({ 
  post, 
  showAuthor = true, 
  showCategories = true, 
  className = "" 
}: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const categories = post.metadata?.categories || []

  return (
    <article className={`card hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {featuredImage && (
        <Link href={`/posts/${post.slug}`}>
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      
      <div className="p-6">
        {showCategories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((category) => (
              <CategoryBadge key={category.id} category={category} />
            ))}
          </div>
        )}
        
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        {post.metadata?.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.metadata.excerpt}
          </p>
        )}
        
        {post.metadata?.location && (
          <div className="text-sm text-gray-500 mb-3">
            📍 {post.metadata.location}
          </div>
        )}
        
        {showAuthor && author && (
          <div className="flex items-center">
            {author.metadata?.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={author.title}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-3"
              />
            )}
            <div className="text-sm">
              <p className="text-gray-900 font-medium">{author.title}</p>
              {author.metadata?.italy_expert && (
                <p className="text-primary text-xs">Italy Expert</p>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}