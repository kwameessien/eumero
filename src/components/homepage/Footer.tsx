import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full px-6 py-8">
      <div className="mb-6 w-full border-t border-black/10" />
      <div className="flex w-full flex-wrap items-center justify-between">
        <a href="#" className="footer-link text-gray-600 transition-colors hover:text-black">
          Newsletter
        </a>
        <Link href="/shop" className="footer-link text-gray-600 transition-colors hover:text-black">
          Shop
        </Link>
        <Link href="/contact" className="footer-link text-gray-600 transition-colors hover:text-black">
          Contact
        </Link>
        <a href="#" className="footer-link text-gray-600 transition-colors hover:text-black">
          Instagram
        </a>
        <a href="#" className="footer-link text-gray-600 transition-colors hover:text-black">
          Terms of Service
        </a>
        <a href="#" className="footer-link text-gray-600 transition-colors hover:text-black">
          Shipping Policy
        </a>
        <a href="#" className="footer-link text-gray-600 transition-colors hover:text-black">
          Refund Policy
        </a>
        <a href="#" className="footer-link text-gray-600 transition-colors hover:text-black">
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
