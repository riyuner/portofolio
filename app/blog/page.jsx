import Link from 'next/link'
import { getAllPosts } from '../lib/blog'
import { Calendar, Clock, ChevronRight, User, ArrowRight, BookOpen } from 'lucide-react'
import { format } from 'date-fns'

export const metadata = {
  title: 'Blog | Rifqi Yuner',
  description: 'Technical articles about software development, IoT, and technology insights',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <div className="w-16 h-1 bg-black mb-6" />
          <p className="text-gray-600 text-lg mb-8">
            Technical articles about software development, IoT systems, and building elegant solutions.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span>{posts.length} Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Technical Writing</span>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="pb-20">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <article key={post.slug} className="group">
                  <div className="bg-white p-5 border border-gray-200 hover:border-black transition-colors">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold group-hover:underline">{post.title}</h3>
                        <time dateTime={post.date} className="text-sm font-medium text-gray-500">
                          {format(new Date(post.date), 'MMM yyyy')}
                        </time>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <time dateTime={post.date}>
                              {format(new Date(post.date), 'MMM dd, yyyy')}
                            </time>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime || '5 min read'}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-black font-medium text-sm group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium tracking-wide border border-gray-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
