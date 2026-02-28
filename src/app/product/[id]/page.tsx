import Marquee from '../../../components/homepage/Marquee'
import Nav from '../../../components/homepage/Nav'
import Footer from '../../../components/homepage/Footer'
import { products } from '../../../data/products'

type ProductPageProps = {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id)
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <>
        <Marquee />
        <Nav />
        <div className="flex min-h-screen flex-col">
          <div className="mt-12 flex-grow px-12 py-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-inria text-sm text-black">Product not found</p>
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
        <div className="mt-12 flex-grow px-12 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
              <div className="flex justify-center">
                <img src={product.image} alt={product.name} className="h-auto max-h-[400px] w-full object-contain" />
              </div>

              <div className="flex flex-col">
                <h1 className="mb-6 font-inria text-2xl font-bold uppercase text-black">{product.name}</h1>
                <p className="mb-8 font-inria text-sm leading-relaxed text-black">{product.description}</p>
                <p className="mb-8 font-inria text-4xl font-bold text-black">{product.price}</p>
                <button className="rounded-lg bg-[#AAA397] px-8 py-4 font-inria text-sm uppercase text-white transition-colors hover:bg-[#9a9587]">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
