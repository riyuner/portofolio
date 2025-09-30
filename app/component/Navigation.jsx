'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => pathname === path

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            RIFQI<span className="font-light">YUNER</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-5 py-2 text-sm font-medium tracking-wide transition-all relative group ${
                isActive('/') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              HOME
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform transition-transform ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
            <Link
              href="/blog"
              className={`px-5 py-2 text-sm font-medium tracking-wide transition-all relative group ${
                pathname?.startsWith('/blog') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              BLOG
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform transition-transform ${
                pathname?.startsWith('/blog') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium tracking-wide rounded ${
                isActive('/') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium tracking-wide rounded ${
                pathname?.startsWith('/blog') ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              BLOG
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
