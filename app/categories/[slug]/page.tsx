// app/categories/[slug]/page.tsx
import { getCategory, getCategories, getPostsByCategory } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.title} - Italy Travel Blog`,
    description: category.metadata?.description || `Explore travel guides and articles about ${category.title}.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        {category.metadata?.hero_image ? (
          <img
            src={`${category.metadata.hero_image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
            alt={category.metadata?.name || category.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ backgroundColor: category.metadata?.color || '#8B4513' }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="mb-4">
              <span 
                className="category-badge text-lg px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30"
                style={{ color: 'white' }}
              >
                {category.title}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {category.metadata?.name || category.title}
            </h1>
            
            {category.metadata?.description && (
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {category.metadata.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <p className="text-gray-600">
                  Discover {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    showAuthor={true}
                    showCategories={false}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-500">
                No posts found in this category yet
              </h3>
              <p className="text-gray-400 mt-2">
                Check back soon for new travel guides!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}