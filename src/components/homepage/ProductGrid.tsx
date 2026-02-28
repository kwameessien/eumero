import Link from 'next/link'
import { products } from '../../data/products'

function ProductGrid() {
  return (
    <div className="w-full px-12 pb-6 pt-20">
      <div className="flex flex-row items-end justify-center gap-40">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group flex cursor-pointer flex-col items-center justify-end text-black no-underline transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[5px]"
          >
            <div className="relative mb-4 flex h-[300px] items-end overflow-hidden">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0" />
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 h-auto max-h-full max-w-[2000px] object-contain transition-[filter,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:animate-liquidEffect"
              />
            </div>
            <div className="text-center">
              <p className="font-inria text-sm text-black">{product.name}</p>
              <p className="font-inria text-sm text-black">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
