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
    'Rifqi Yuner',
    'Bandung Software Engineer',
    'Indonesia Developer'
  ],
  authors: [{ name: 'Rifqi Yuner' }],
  metadataBase: new URL('https://riyuner.id'),
  alternates: {
    canonical: 'https://riyuner.id',
  },
  openGraph: {
    title: 'Rifqi Yuner | Senior Software Engineer',
    description: 'Building robust systems and sharing tech insights',
    url: 'https://riyuner.id',
    siteName: 'Rifqi Yuner',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/blog/images/riyuner.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rifqi Yuner - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rifqi Yuner | Senior Software Engineer',
    description: 'Building robust systems and sharing tech insights',
    images: ['/blog/images/riyuner.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
              url: 'https://riyuner.id',
              email: 'riyuner@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bandung',
                addressRegion: 'West Java',
                addressCountry: 'Indonesia',
              },
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'BINUS University Online Learning',
                },
                {
                  '@type': 'EducationalOrganization',
                  name: 'Politeknik Negeri Bandung',
                },
              ],
              knowsAbout: [
                'Full Stack Development',
                'Enterprise Java Development',
                'IoT Solutions',
                'Embedded Systems',
                'DevOps and CI/CD',
                'Cloud Infrastructure',
                'Tactical Communication Systems',
                'Real-time Data Processing',
                'System Integration',
              ],
              sameAs: [
                'https://id.linkedin.com/in/rifqi-yuner-2a4a07148',
              ],
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
