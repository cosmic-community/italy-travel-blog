'use client'

const COSMIC_BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG || 'italy-travel-blog-production'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🇮🇹</span>
              <span className="text-xl font-bold">Italy Travel Blog</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover authentic Italy with expert travel guides, hidden gems, and cultural insights from certified Italian travel specialists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/posts" className="text-gray-400 hover:text-white transition-colors">
                  All Posts
                </a>
              </li>
              <li>
                <a href="/categories/tuscany" className="text-gray-400 hover:text-white transition-colors">
                  Tuscany
                </a>
              </li>
              <li>
                <a href="/categories/coastal-italy" className="text-gray-400 hover:text-white transition-colors">
                  Coastal Italy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="/categories/art-culture" className="text-gray-400 hover:text-white transition-colors">
                  Art & Culture
                </a>
              </li>
              <li>
                <a href="/categories/food-wine" className="text-gray-400 hover:text-white transition-colors">
                  Food & Wine
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Italy Travel Blog. All rights reserved.
          </p>
          
          <a
            href={`https://www.cosmicjs.com?utm_source=bucket_${COSMIC_BUCKET_SLUG}&utm_medium=referral&utm_campaign=app_footer&utm_content=built_with_cosmic`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#11171A',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1a2326'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#11171A'}
          >
            <img 
              src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
              alt="Cosmic Logo" 
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            Built with Cosmic
          </a>
        </div>
      </div>
    </footer>
  )
}