# Italy Travel Blog

A beautifully crafted Next.js travel blog showcasing the wonders of Italy, featuring expert travel guides, hidden gems, and cultural insights from certified travel experts.

![App Preview](https://imgix.cosmicjs.com/788b5d20-643c-11f0-a051-23c10f41277a-photo-1516483638261-f4dbaf036963-1752887132405.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- 🏛️ **Expert Travel Guides** - Curated content from certified Italy travel experts
- 🗺️ **Regional Categories** - Browse by Tuscany, Coastal Italy, Art & Culture, and Food & Wine  
- 📝 **Rich Travel Content** - Detailed posts with travel tips and location information
- 👤 **Author Profiles** - Meet the Italy experts behind the content
- 📱 **Responsive Design** - Optimized for all devices
- 🎨 **Beautiful UI** - Clean, magazine-style design with Italian aesthetics
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized images

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=687ac2e11d52a5b67a27f2e1&clone_repository=687b204c7e239a53d1483fd5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content Management**: Cosmic CMS
- **TypeScript**: Full type safety
- **Font**: Inter font family
- **Image Optimization**: Imgix integration

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your travel blog content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=italy-travel-blog-production
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Posts
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all posts with authors and categories
const posts = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get a single post by slug
const post = await cosmic.objects
  .findOne({ type: 'posts', slug: 'your-post-slug' })
  .depth(1)
```

### Fetching Categories
```typescript
// Get all categories
const categories = await cosmic.objects
  .find({ type: 'categories' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket containing:

- **Posts**: Travel articles with rich content, featured images, authors, and categories
- **Authors**: Travel experts with bios, avatars, and social links
- **Categories**: Regional and thematic organization (Tuscany, Coastal Italy, etc.)

The app uses the Cosmic SDK to fetch content dynamically and supports:
- Dynamic routing for posts and categories
- Connected object relationships (authors and categories in posts)
- Rich metadata for SEO
- Image optimization through Imgix

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your repository to Netlify
2. Set build command to `bun run build`
3. Add environment variables in Netlify dashboard

### Environment Variables for Production
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Visit your deployed site and explore the beautiful travel content from your Cosmic bucket!
<!-- README_END -->