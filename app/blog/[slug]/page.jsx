import { getAllPosts, getPostBySlug, markdownToHtml } from '@/app/lib/blog'
import BlogPostClient from './BlogPostClient'

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    const url = `https://riyuner.id/blog/${slug}`

    return {
        title: `${post.title} | Rifqi Yuner`,
        description: post.excerpt,
        keywords: post.tags || [],
        authors: [{ name: 'Rifqi Yuner' }],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: url,
            siteName: 'Rifqi Yuner',
            type: 'article',
            publishedTime: post.date,
            authors: ['Rifqi Yuner'],
            tags: post.tags || [],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export default async function BlogPost({ params }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    const contentHtml = await markdownToHtml(post.content)

    return <BlogPostClient post={post} contentHtml={contentHtml} />
}