import Marquee from '@/components/layout/Marquee'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ShopProductGrid from '@/components/shop/ShopProductGrid'
import { products } from '@/data/products'

export default function ShopPage() {
  const gridItems = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    width: product.imageWidth,
    height: product.imageHeight,
  }))

  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-1px] left-1/2 top-0 z-[2] w-px -translate-x-1/2 bg-black/20"
          />
          <ShopProductGrid items={gridItems} />
        </div>
        <Footer />
      </div>
    </>
  )
}
