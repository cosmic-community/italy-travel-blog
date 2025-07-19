import { cosmic } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'
import { Category } from '@/types'

export default async function CategoriesPage() {
  let categories: Category[] = []

  try {
    const response = await cosmic.objects
      .find({
        type: 'categories'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    categories = response.objects as Category[]
  } catch (error) {
    console.error('Error fetching categories:', error)
    // Handle the case where no categories are found (404 error)
    categories = []
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Travel Categories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore Italy through our curated travel categories. From the rolling hills of Tuscany to the stunning coastlines and rich cultural heritage, discover the perfect inspiration for your next Italian adventure.
        </p>
      </div>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No categories found.</p>
        </div>
      )}
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Travel Categories | Italy Travel Blog',
    description: 'Browse all travel categories including Tuscany, Coastal Italy, Art & Culture, and Food & Wine. Find inspiration for your perfect Italian adventure.',
  }
}