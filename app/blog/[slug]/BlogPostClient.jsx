'use client';

import { Calendar, Clock, ChevronLeft, ArrowUpRight } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BlogPostClient({ post, contentHtml }) {
    const [readingProgress, setReadingProgress] = useState(0)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight - windowHeight
            const scrolled = window.scrollY
            const progress = (scrolled / documentHeight) * 100
            setReadingProgress(Math.min(progress, 100))

            // Update active section based on scroll position
            const headings = document.querySelectorAll('article h2[id], article h3[id]')
            let current = ''

            headings.forEach((heading) => {
                const rect = heading.getBoundingClientRect()
                if (rect.top <= 100) {
                    current = heading.id
                }
            })

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
                <div
                    className="h-full bg-black transition-all duration-150"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            {/* Header Navigation */}
            <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
                <div className="max-w-[90%] sm:max-w-[680px] lg:max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors group"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                </div>
            </header>

            <div className="max-w-[90%] sm:max-w-[680px] lg:max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="lg:grid lg:grid-cols-[1fr,auto] lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:min-w-0">
                        {/* Article Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <time dateTime={post.date} className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {format(new Date(post.date), 'MMMM dd, yyyy')}
                                </time>
                                <span className="text-gray-300">•</span>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>{post.readTime || '5 min read'}</span>
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#1a1a1a] leading-[1.1]">
                                {post.title}
                            </h1>

                            {post.excerpt && (
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            )}

                            {post.tags && (
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </header>

                        {/* Article Content */}
                        <article
                            className="prose-custom"
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />

                        {/* Article Footer */}
                        <footer className="mt-16 pt-8 border-t border-gray-200">
                            <div className="bg-gray-50 rounded-lg p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gray-900 rounded-full overflow-hidden">
                                            <img
                                                src="/blog/images/riyuner2.png"
                                                alt="Rifqi Yuner"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold mb-2">Rifqi Yuner</h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            Senior Software Engineer specializing in full-stack development, IoT solutions, and defense systems.
                                            Based in Bandung, Indonesia.
                                        </p>
                                        <Link
                                            href="mailto:riyuner@gmail.com"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all"
                                        >
                                            Get in touch
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>

                    {/* Table of Contents Sidebar (Desktop only) */}
                    <aside className="hidden lg:block lg:w-64 lg:self-start">
                        <div className="sticky top-20">
                            <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-4">ON THIS PAGE</h3>
                            <TableOfContents
                                contentHtml={contentHtml}
                                activeSection={activeSection}
                            />
                        </div>
                    </aside>
                </div>
            </div>

            {/* Inline Styles for Custom Prose */}
            <style jsx global>{`
                .prose-custom {
                    max-width: none;
                }

                /* Headings */
                .prose-custom h1,
                .prose-custom h2,
                .prose-custom h3,
                .prose-custom h4 {
                    font-weight: 700;
                    color: #1a1a1a;
                    letter-spacing: -0.02em;
                    scroll-margin-top: 100px;
                }

                .prose-custom h1 { font-size: 2.5rem; margin: 3rem 0 1.5rem; line-height: 1.2; }
                .prose-custom h2 { font-size: 2rem; margin: 2.5rem 0 1rem; line-height: 1.3; }
                .prose-custom h3 { font-size: 1.5rem; margin: 2rem 0 0.75rem; line-height: 1.4; }
                .prose-custom h4 { font-size: 1.25rem; margin: 1.5rem 0 0.75rem; line-height: 1.4; }

                /* Heading links */
                .prose-custom h2 a,
                .prose-custom h3 a {
                    text-decoration: none;
                    color: inherit;
                }

                .prose-custom h2:hover a::before,
                .prose-custom h3:hover a::before {
                    content: "#";
                    position: absolute;
                    left: -1.5rem;
                    color: #d1d5db;
                    font-weight: 400;
                }

                /* Paragraphs */
                .prose-custom p {
                    font-size: 1.125rem;
                    line-height: 1.75;
                    color: #374151;
                    margin-bottom: 1.5rem;
                }

                .prose-custom p:first-of-type {
                    font-size: 1.25rem;
                    color: #1f2937;
                }

                /* Links */
                .prose-custom a {
                    color: #1a1a1a;
                    text-decoration: underline;
                    text-decoration-color: #d1d5db;
                    text-decoration-thickness: 1px;
                    text-underline-offset: 2px;
                    transition: all 0.2s;
                }

                .prose-custom a:hover {
                    text-decoration-color: #1a1a1a;
                }

                /* Strong and Emphasis */
                .prose-custom strong {
                    color: #1a1a1a;
                    font-weight: 600;
                }

                .prose-custom em {
                    font-style: italic;
                }

                /* Lists */
                .prose-custom ul,
                .prose-custom ol {
                    margin: 1.5rem 0;
                    padding-left: 1.5rem;
                }

                .prose-custom li {
                    font-size: 1.125rem;
                    line-height: 1.75;
                    color: #374151;
                    margin-bottom: 0.5rem;
                }

                .prose-custom ul > li {
                    list-style-type: disc;
                }

                .prose-custom ol > li {
                    list-style-type: decimal;
                }

                /* Code */
                .prose-custom code {
                    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
                    font-size: 0.875em;
                    background: #f3f4f6;
                    padding: 0.2em 0.4em;
                    border-radius: 0.25rem;
                    color: #1a1a1a;
                }

                .prose-custom pre {
                    background: #1a1a1a;
                    color: #f3f4f6;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin: 2rem 0;
                    font-size: 0.875rem;
                    line-height: 1.7;
                }

                .prose-custom pre code {
                    background: transparent;
                    padding: 0;
                    color: inherit;
                    font-size: inherit;
                }

                /* Syntax Highlighting */
                .prose-custom .hljs {
                    background: transparent;
                }

                .prose-custom .hljs-comment,
                .prose-custom .hljs-quote {
                    color: #6b7280;
                    font-style: italic;
                }

                .prose-custom .hljs-keyword,
                .prose-custom .hljs-selector-tag,
                .prose-custom .hljs-subst {
                    color: #ec4899;
                }

                .prose-custom .hljs-number,
                .prose-custom .hljs-literal,
                .prose-custom .hljs-variable,
                .prose-custom .hljs-template-variable {
                    color: #f59e0b;
                }

                .prose-custom .hljs-string,
                .prose-custom .hljs-doctag {
                    color: #10b981;
                }

                .prose-custom .hljs-title,
                .prose-custom .hljs-section,
                .prose-custom .hljs-selector-id {
                    color: #3b82f6;
                }

                .prose-custom .hljs-type,
                .prose-custom .hljs-class .hljs-title {
                    color: #8b5cf6;
                }

                .prose-custom .hljs-tag,
                .prose-custom .hljs-name,
                .prose-custom .hljs-attribute {
                    color: #06b6d4;
                }

                .prose-custom .hljs-regexp,
                .prose-custom .hljs-link {
                    color: #14b8a6;
                }

                .prose-custom .hljs-symbol,
                .prose-custom .hljs-bullet {
                    color: #f59e0b;
                }

                .prose-custom .hljs-built_in,
                .prose-custom .hljs-builtin-name {
                    color: #06b6d4;
                }

                /* Blockquotes */
                .prose-custom blockquote {
                    border-left: 4px solid #e5e7eb;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-size: 1.125rem;
                    font-style: italic;
                    color: #6b7280;
                }

                /* Horizontal Rule */
                .prose-custom hr {
                    border: none;
                    border-top: 1px solid #e5e7eb;
                    margin: 3rem 0;
                }

                /* Images */
                .prose-custom img {
                    border-radius: 0.5rem;
                    margin: 2rem 0;
                    max-width: 100%;
                    height: auto;
                }

                /* Tables */
                .prose-custom table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    font-size: 0.875rem;
                }

                .prose-custom th {
                    background: #f9fafb;
                    font-weight: 600;
                    text-align: left;
                    padding: 0.75rem 1rem;
                    border: 1px solid #e5e7eb;
                }

                .prose-custom td {
                    padding: 0.75rem 1rem;
                    border: 1px solid #e5e7eb;
                }

                .prose-custom tr:hover {
                    background: #f9fafb;
                }
            `}</style>
        </div>
    )
}

function TableOfContents({ contentHtml, activeSection }) {
    const [headings, setHeadings] = useState([])

    useEffect(() => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(contentHtml, 'text/html')
        const headingElements = doc.querySelectorAll('h2, h3')

        const extracted = Array.from(headingElements).map((heading) => ({
            id: heading.id,
            text: heading.textContent.replace(/^#\s*/, ''),
            level: heading.tagName.toLowerCase()
        }))

        setHeadings(extracted)
    }, [contentHtml])

    if (headings.length === 0) return null

    return (
        <nav>
            <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                    <li key={heading.id} className={heading.level === 'h3' ? 'pl-4' : ''}>
                        <a
                            href={`#${heading.id}`}
                            className={`block py-1 transition-colors ${
                                activeSection === heading.id
                                    ? 'text-black font-medium'
                                    : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
