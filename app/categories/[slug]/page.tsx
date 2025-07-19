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
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span 
              className="category-badge text-lg px-4 py-2"
              style={{ backgroundColor: category.metadata?.color || '#8B4513' }}
            >
              {category.title}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.metadata?.name || category.title}
          </h1>
          
          {category.metadata?.description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {category.metadata.description}
            </p>
          )}
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
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
  )
}