 'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function Nav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!searchContainerRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  return (
    <nav className="mt-8 flex w-full items-center justify-between border-b border-black/20 px-4 pb-1 pt-2">
      <Link href="/" className="nav-logo text-black">
        EUMERO.
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/shop" className="nav-link text-gray-600 transition-colors hover:text-black">
          shop
        </Link>
        <a href="#" className="nav-link text-gray-600 transition-colors hover:text-black">
          rituals
        </a>
        <a href="#" className="nav-link text-gray-600 transition-colors hover:text-black">
          about
        </a>
        <div ref={searchContainerRef} className="flex items-center">
          {isSearchOpen ? (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-28 border-b border-black bg-transparent pb-0.5 text-sm text-black outline-none placeholder:text-gray-400"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="nav-link text-gray-600 transition-colors hover:text-black"
            >
              search
            </button>
          )}
        </div>
        <a href="#" className="nav-link text-gray-600 transition-colors hover:text-black">
          cart
        </a>
      </div>
    </nav>
  )
}

export default Nav