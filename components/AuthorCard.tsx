import { Author } from '@/types';

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export default function AuthorCard({ author, className = "" }: AuthorCardProps) {
  if (!author) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        {author.metadata?.avatar?.imgix_url && (
          <img
            src={`${author.metadata.avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={author.metadata?.name || author.title}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
        )}
        
        {/* Author Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {author.metadata?.name || author.title}
            </h3>
            {author.metadata?.italy_expert && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                Italy Expert
              </span>
            )}
          </div>
          
          {author.metadata?.bio && (
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {author.metadata.bio}
            </p>
          )}
          
          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm">
            {author.metadata?.website && (
              <a
                href={author.metadata.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                Website
              </a>
            )}
            {author.metadata?.instagram && (
              <a
                href={`https://instagram.com/${author.metadata.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 hover:underline"
              >
                @{author.metadata.instagram}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}