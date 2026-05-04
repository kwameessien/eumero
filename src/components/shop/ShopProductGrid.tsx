import Image from 'next/image'
import Link from 'next/link'

export type ShopProductGridItem = {
  id: number
  name: string
  price: string
  image: string
  width: number
  height: number
}

type ShopProductGridProps = {
  items: ShopProductGridItem[]
}

function ShopProductGrid({ items }: ShopProductGridProps) {
  return (
    <div className="w-full border-t border-l border-black/20">
      <div className="grid grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="group flex min-h-[min(52vh,440px)] flex-col justify-between border-r border-b border-black/20 p-8 transition-colors hover:bg-black/[0.02] md:min-h-[min(48vh,520px)] md:p-12 lg:min-h-[520px]"
          >
            <div className="flex flex-1 flex-col items-center justify-center pb-6">
              <Image
                src={item.image}
                alt={item.name}
                width={item.width}
                height={item.height}
                sizes="(max-width: 767px) 42vw, 28vw"
                className="h-auto max-h-[240px] w-auto object-contain md:max-h-[320px] lg:max-h-[380px]"
              />
            </div>
            <div className="text-left">
              <p className="shop-product-name text-black">{item.name}</p>
              <p className="shop-product-price mt-1 text-black">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShopProductGrid
