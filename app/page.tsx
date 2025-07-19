import { getPosts, getCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryCard from '@/components/CategoryCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ])

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 4)

  return (
    <div>
      {featuredPost && <Hero post={featuredPost} />}
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Italy by Region
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the rolling hills of Tuscany to the stunning Amalfi Coast, discover Italy's diverse regions and cultures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Travel Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh insights and travel tips from our Italy experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                showAuthor={true}
                showCategories={true}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/posts" 
              className="btn-primary"
            >
              View All Posts
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}