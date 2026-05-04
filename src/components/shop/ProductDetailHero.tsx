import Image from 'next/image'
import type { Product } from '@/data/products'

type ProductDetailHeroProps = {
  product: Product
}

const defaultDetailHeroImageClass =
  'max-w-[200px] object-contain md:max-w-[240px] lg:max-w-[280px]'

function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const heroImageClass = product.detailHeroImageClass ?? defaultDetailHeroImageClass

  return (
    <section className="border-b border-black/20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col md:flex-row md:divide-x md:divide-black/20">
        <div className="relative flex w-full min-h-[320px] flex-1 items-center justify-center px-8 py-14 md:min-h-[calc(100vh-12rem)] md:w-1/2 md:py-16">
          <Image
            src={product.image}
            alt={product.name}
            width={product.imageWidth}
            height={product.imageHeight}
            sizes="(max-width: 767px) 85vw, 42vw"
            priority
            className={`h-auto w-full ${heroImageClass}`}
          />
        </div>

        <div className="relative flex w-full flex-1 flex-col justify-center border-t border-black/20 px-8 py-14 md:w-1/2 md:border-t-0 md:py-16 md:pl-12 md:pr-14 lg:pl-16 lg:pr-20">
          <div className="relative flex max-w-xl flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="product-detail-headline text-black">{product.headline}</h1>
              <p className="product-detail-subtitle text-black">{product.name}</p>
            </div>

            <div className="flex flex-col gap-5">
              {product.bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="product-description text-black">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="product-detail-accordion border-t border-black/15 pt-1">
              <details className="group">
                <summary className="product-description flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-black [&::-webkit-details-marker]:hidden">
                  <span>{product.accordionTitle}</span>
                  <span
                    aria-hidden
                    className="product-detail-chevron inline-block text-[10px] leading-none text-black/60 transition-transform duration-200"
                  >
                    ▼
                  </span>
                </summary>
                <p className="product-description pb-4 pt-0 text-black/80">{product.accordionBody}</p>
              </details>
            </div>

            <p className="product-detail-price text-black">{product.price}</p>

            <button
              type="button"
              className="product-detail-cta w-full max-w-md border border-black bg-black px-8 py-4 text-white transition-colors hover:bg-black/90"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailHero
