// app/posts/[slug]/page.tsx
import { getPost, getPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import AuthorCard from '@/components/AuthorCard'
import CategoryBadge from '@/components/CategoryBadge'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Italy Travel Blog`,
    description: post.metadata?.excerpt || `Read about ${post.title} on our Italy travel blog.`,
    openGraph: {
      title: post.title,
      description: post.metadata?.excerpt || `Read about ${post.title} on our Italy travel blog.`,
      images: post.metadata?.featured_image ? [
        {
          url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  const featuredImage = post.metadata?.featured_image
  const travelTips = post.metadata?.travel_tips || []

  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((category) => (
                  <CategoryBadge key={category.id} category={category} />
                ))}
              </div>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          {post.metadata?.excerpt && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.metadata.excerpt}
            </p>
          )}
          
          {post.metadata?.location && (
            <div className="text-gray-500 mb-6">
              📍 {post.metadata.location}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-8">
            <img
              src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Author */}
        {author && (
          <div className="mb-8">
            <AuthorCard author={author} />
          </div>
        )}

        {/* Content */}
        {post.metadata?.content && (
          <div 
            className="prose max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.metadata.content }}
          />
        )}

        {/* Travel Tips */}
        {travelTips.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              💡 Travel Tips
            </h3>
            <ul className="space-y-2">
              {travelTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}