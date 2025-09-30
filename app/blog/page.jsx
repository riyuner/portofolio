import Link from 'next/link'
import { getAllPosts } from '../lib/blog'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'

export const metadata = {
  title: 'Blog | Rifqi Yuner',
  description: 'Technical articles about software development, IoT, and technology insights',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Blog</h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="text-xl text-gray-600">
            Thoughts on software development, technology, and lessons learned from building systems.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-0">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <time dateTime={post.date}>
                          {format(new Date(post.date), 'MMMM dd, yyyy')}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime || '5 min read'}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-3 group-hover:underline">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ChevronRight size={16} />
                    </div>
                    
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium border border-gray-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
