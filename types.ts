// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
  bucket?: string;
  created_by?: string;
  modified_by?: string;
  thumbnail?: string;
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    website?: string;
    instagram?: string;
    italy_expert?: boolean;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    color?: string;
  };
}

// Post interface
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    categories?: Category[];
    location?: string;
    travel_tips?: string[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isPost(obj: CosmicObject): obj is Post {
  return obj.type === 'posts';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type === 'authors';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

// Utility types
export type PostCardProps = {
  post: Post;
  showAuthor?: boolean;
  showCategories?: boolean;
  className?: string;
};

export type CategoryCardProps = {
  category: Category;
  className?: string;
};

export type AuthorCardProps = {
  author: Author;
  className?: string;
};