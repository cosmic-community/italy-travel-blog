import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Italy Travel Blog - Expert Guides & Hidden Gems',
  description: 'Discover authentic Italy with expert travel guides, hidden gems, and cultural insights from certified Italian travel specialists.',
  keywords: 'Italy travel, travel blog, Italian culture, Tuscany, Rome, Florence, Cinque Terre, travel guides',
  authors: [{ name: 'Italy Travel Experts' }],
  openGraph: {
    title: 'Italy Travel Blog - Expert Guides & Hidden Gems',
    description: 'Discover authentic Italy with expert travel guides, hidden gems, and cultural insights.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Travel Blog - Expert Guides & Hidden Gems',
    description: 'Discover authentic Italy with expert travel guides, hidden gems, and cultural insights.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇮🇹</text></svg>"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}