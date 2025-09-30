import { getAllPosts, getPostBySlug, markdownToHtml } from '@/app/lib/blog'
import { Calendar, Clock, ChevronLeft } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }) {
    const post = getPostBySlug(params.slug)

    return {
        title: `${post.title} | Rifqi Yuner`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
        },
    }
}

export default async function BlogPost({ params }) {
    const post = getPostBySlug(params.slug)
    const contentHtml = await markdownToHtml(post.content)

    return (
        <div className="min-h-screen bg-white pt-20">
            <article className="py-20 px-6 lg:px-12">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Post Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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

                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            {post.excerpt}
                        </p>

                        {post.tags && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm font-medium border border-gray-300 rounded"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Post Content */}
                    <div
                        className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-black prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-700 prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-4 prose-blockquote:italic
              prose-img:rounded-lg prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    {/* Author Section */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Rifqi Yuner</h3>
                                <p className="text-gray-600 text-sm">
                                    Senior Software Engineer specializing in full-stack development, IoT solutions, and defense systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}