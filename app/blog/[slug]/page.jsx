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
    const { slug } = await params
    const post = getPostBySlug(slug)
    const contentHtml = await markdownToHtml(post.content)

    return <BlogPostClient post={post} contentHtml={contentHtml} />
}