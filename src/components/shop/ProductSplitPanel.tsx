import Image from 'next/image'
import type { PdpSplitPanel } from '@/data/products'

type ProductSplitPanelProps = {
  panel: PdpSplitPanel
}

/** Ingredient / info graphic left, lifestyle photography right (below PDP hero). */
function ProductSplitPanel({ panel }: ProductSplitPanelProps) {
  return (
    <section className="border-b border-black/20 bg-white" aria-label="Ingredients and ritual">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col md:flex-row md:divide-x md:divide-black/20">
        <div className="flex w-full items-center justify-center px-6 py-10 md:w-1/2 md:px-10 md:py-14 lg:px-14">
          <Image
            src={panel.ingredientsSrc}
            alt={panel.ingredientsAlt}
            width={panel.ingredientsWidth}
            height={panel.ingredientsHeight}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="h-auto w-full max-w-[min(100%,560px)] object-contain"
          />
        </div>

        <div className="relative aspect-[499/453] w-full border-t border-black/20 md:aspect-auto md:h-[52rem] md:w-1/2 md:border-t-0 lg:h-[56rem]">
          <Image
            src={panel.lifestyleSrc}
            alt={panel.lifestyleAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductSplitPanel
