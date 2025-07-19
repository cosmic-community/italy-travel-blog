import { Post } from '@/types'

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  post?: Post;
}

export default function Hero({ 
  title,
  subtitle,
  backgroundImage,
  post
}: HeroProps) {
  // If post is provided, use its data; otherwise use defaults
  const heroTitle = post?.metadata?.title || title || "Discover Italy";
  const heroSubtitle = post?.metadata?.excerpt || subtitle || "Your ultimate guide to Italy's hidden gems, authentic cuisine, and unforgettable experiences";
  const heroBackground = post?.metadata?.featured_image?.imgix_url || backgroundImage || "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=2000&auto=format,compress";

  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          {heroTitle}
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
          {heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {post ? (
            <a
              href={`/posts/${post.slug}`}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Read Article
            </a>
          ) : (
            <a
              href="/posts"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Articles
            </a>
          )}
          <a
            href="/categories"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  );
}