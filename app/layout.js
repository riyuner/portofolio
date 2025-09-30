import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './component/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rifqi Yuner | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in full-stack development, IoT solutions, and defense systems. Personal blog about technology and software development.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Java Developer',
    'Python Developer',
    'Tech Blog',
    'IoT Engineer',
    'Rifqi Yuner'
  ],
  authors: [{ name: 'Rifqi Yuner' }],
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Rifqi Yuner | Senior Software Engineer',
    description: 'Building robust systems and sharing tech insights',
    url: 'https://your-domain.com',
    siteName: 'Rifqi Yuner',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rifqi Yuner',
              jobTitle: 'Senior Software Engineer',
              url: 'https://your-domain.com',
              email: 'riyuner@gmail.com',
              sameAs: ['https://id.linkedin.com/in/rifqi-yuner-2a4a07148'],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
