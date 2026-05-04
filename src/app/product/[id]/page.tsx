import Marquee from '@/components/layout/Marquee'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductDetailHero from '@/components/shop/ProductDetailHero'
import ProductSplitPanel from '@/components/shop/ProductSplitPanel'
import { products } from '@/data/products'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const productId = Number(id)
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <>
        <Marquee />
        <Nav />
        <div className="flex min-h-screen flex-col">
          <div className="mt-12 flex-grow px-12 py-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="product-description text-black">Product not found</p>
            </div>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Marquee />
      <Nav />
      <div className="flex min-h-screen flex-col">
        <div className="min-h-0 flex-1">
          <ProductDetailHero product={product} />
          {product.splitPanel ? <ProductSplitPanel panel={product.splitPanel} /> : null}
        </div>
        <div className="shrink-0">
          <Footer />
        </div>
      </div>
    </>
  )
}
