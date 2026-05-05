import Image from 'next/image'
import Link from 'next/link'

export type ShopProductGridItem = {
  id: number
  name: string
  price: string
  image: string
}

type ShopProductGridProps = {
  items: ShopProductGridItem[]
}

function ShopProductGrid({ items }: ShopProductGridProps) {
  const colCount = 2
  const rowCount = Math.max(1, Math.ceil(items.length / colCount))
  const rowClass = `shop-product-grid--r${Math.min(rowCount, 12)}`

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col border-l border-black/20">
      <div className={`shop-product-grid ${rowClass}`}>
        {items.map((item, index) => {
          const rowIndex = Math.floor(index / colCount)
          const isBottomRow = rowIndex === rowCount - 1
          // Odd index = second column: border-r on every row (outer right edge of grid).
          // Even index = first column: no border-r here — the shop page draws the center vertical
          // so we do not stack a second stroke on the column gutter.
          const isSecondColumn = index % 2 === 1
          return (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className={`group flex h-full min-h-[260px] flex-col justify-between p-8 transition-colors hover:bg-black/[0.02] md:min-h-[300px] ${isSecondColumn ? 'border-r border-black/20' : ''} ${isBottomRow ? '' : 'border-b border-black/20'}`}
            >
              <div className="flex flex-1 flex-col items-center justify-center pb-6">
                <div className="relative h-[min(66vw,280px)] w-full max-w-[min(88vw,320px)] md:h-[min(36vw,340px)] md:max-w-[min(42vw,360px)] lg:h-[400px] lg:max-w-[400px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 767px) 45vw, 30vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="shop-product-name text-black">{item.name}</p>
                <p className="shop-product-price mt-1 text-black">{item.price}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ShopProductGrid
