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
        <div className="flex flex-1 flex-col">
          <h1 className="shop-title border-b border-black/20 px-6 py-10 text-center">Shop</h1>
          <ShopProductGrid items={gridItems} />
        </div>
        <Footer />
      </div>
    </>
  )
}
