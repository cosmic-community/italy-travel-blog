import { getPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Travel Posts - Italy Travel Blog',
  description: 'Browse all our expert travel guides and articles about Italy\'s most beautiful destinations.',
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Guides & Articles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of Italy travel guides, tips, and cultural insights.
          </p>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                showAuthor={true}
                showCategories={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No posts found</h3>
          </div>
        )}
      </div>
    </div>
  )
}