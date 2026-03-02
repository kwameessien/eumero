import Link from 'next/link'

function Nav() {
  return (
    <nav className="mt-11 flex w-full items-center justify-between px-4 py-4">
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
        <a href="#" className="nav-link text-gray-600 transition-colors hover:text-black">
          cart
        </a>
      </div>
    </nav>
  )
}

export default Nav
