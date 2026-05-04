'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.2 15.2 21 21" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M1 1h20M1 7h20M1 13h20" />
    </svg>
  )
}

function Nav() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const clusterRef = useRef<HTMLDivElement | null>(null)
  const showNavBorder = pathname !== '/'

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!clusterRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  return (
    <nav
      className={`relative mt-8 flex w-full items-center justify-between px-4 pb-1 pt-2${showNavBorder ? ' border-b border-black/20' : ''}`}
    >
      <Link href="/" className="nav-logo text-black">
        EUMERO.
      </Link>

      <div ref={clusterRef} className="flex items-center gap-8">
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/shop" className="nav-link text-gray-600 transition-colors hover:text-black">
            shop
          </Link>
          <a href="#" className="nav-link text-gray-600 transition-colors hover:text-black">
            rituals
          </a>
          <a href="#" className="nav-link text-gray-600 transition-colors hover:text-black">
            about
          </a>
        </div>

        <div className="flex items-center">
          {isSearchOpen ? (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-36 border-b border-black bg-transparent pb-0.5 text-sm text-black outline-none placeholder:text-gray-400 lg:w-28"
            />
          ) : (
            <>
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex text-black transition-opacity hover:opacity-70 lg:hidden"
                aria-label="Open search"
              >
                <SearchIcon />
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="nav-link hidden text-gray-600 transition-colors hover:text-black lg:inline"
              >
                search
              </button>
            </>
          )}
        </div>

        <a
          href="#"
          className="nav-link hidden text-gray-600 transition-colors hover:text-black lg:inline"
        >
          cart
        </a>

        <div className="relative flex items-center gap-5 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex text-black transition-opacity hover:opacity-70"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <MenuIcon />
          </button>

          {isMobileMenuOpen ? (
            <div className="absolute right-0 top-full z-50 mt-3 min-w-[10rem] border border-black/20 bg-white py-2 shadow-sm">
              <Link
                href="/shop"
                className="nav-link block px-4 py-2 text-gray-600 transition-colors hover:bg-black/5 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                shop
              </Link>
              <a
                href="#"
                className="nav-link block px-4 py-2 text-gray-600 transition-colors hover:bg-black/5 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                rituals
              </a>
              <a
                href="#"
                className="nav-link block px-4 py-2 text-gray-600 transition-colors hover:bg-black/5 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                about
              </a>
              <a
                href="#"
                className="nav-link block border-t border-black/10 px-4 py-2 text-gray-600 transition-colors hover:bg-black/5 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                cart
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Nav
