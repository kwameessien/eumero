import Link from 'next/link'
import Marquee from '../../components/homepage/Marquee'
import Nav from '../../components/homepage/Nav'
import Footer from '../../components/homepage/Footer'
import { products } from '../../data/products'

export default function ShopPage() {
  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="mt-0 flex flex-grow flex-col">
          <h1 className="shop-title mb-5 text-center">Shop All Products</h1>
          <div className="mt-12 w-full px-12 pb-6">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-16">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group flex cursor-pointer flex-col items-center justify-end text-black no-underline transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[5px]"
                >
                  <div className="relative mb-6 flex h-[400px] items-end overflow-hidden">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative z-10 h-auto max-h-full max-w-[500px] object-contain transition-[filter,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:animate-liquidEffect"
                    />
                  </div>
                  <div className="text-center">
                    <p className="product-name text-black">{product.name}</p>
                    <p className="product-price text-black">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-4">
          <Footer />
        </div>
      </div>
    </>
  )
}
