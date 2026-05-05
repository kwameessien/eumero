/** Optional strip below the hero: ingredients graphic + lifestyle photo. */
export type PdpSplitPanel = {
  ingredientsSrc: string
  ingredientsAlt: string
  ingredientsWidth: number
  ingredientsHeight: number
  lifestyleSrc: string
  lifestyleAlt: string
}

export type Product = {
  id: number
  /** Short display title (e.g. ROOT) */
  headline: string
  name: string
  price: string
  image: string
  description?: string
  /** Marketing body shown on the product page */
  bodyParagraphs: string[]
  accordionTitle: string
  accordionBody: string
  imageWidth: number
  imageHeight: number
  /** Tailwind classes for PDP hero `Image` max size (tall bottles often need a tighter cap) */
  detailHeroImageClass?: string
  splitPanel?: PdpSplitPanel
}

const oilParagraphs = [
  'Formulated to support scalp comfort and resilient lengths, ROOT layers lightweight oils that absorb cleanly — no heavy residue, no shortcut shine.',
  'Use on dry or damp hair: a few drops massaged at the roots, then smoothed through the ends as part of a steady ritual.',
]

const sheaParagraphs = [
  'A concentrated shea blend for dry ends and fragile lengths — seals moisture and softens without a waxy finish.',
  'Work a small amount through mid-lengths to ends after styling, or on damp hair before air-dry or diffuse.',
]

const defaultPdpSplitPanel: PdpSplitPanel = {
  ingredientsSrc: '/assets/Info-natural-hair-ingredients.png',
  ingredientsAlt: 'Key botanical ingredients for Eumero hair care',
  ingredientsWidth: 801,
  ingredientsHeight: 860,
  lifestyleSrc: '/assets/product-image.png',
  lifestyleAlt: 'Applying Eumero hair oil in a daily ritual',
}

export const products: Product[] = [
  {
    id: 1,
    headline: 'ROOT',
    name: 'Botanical Growth & Strengthening Oil',
    price: '$52.00',
    image: '/assets/eumero-oil.png',
    description: oilParagraphs.join(' '),
    bodyParagraphs: oilParagraphs,
    accordionTitle: 'Powered by 17 active botanicals.',
    accordionBody:
      'A curated blend of plant oils and extracts chosen for scalp feel, slip, and daily compatibility — including argan, jojoba, and camellia alongside supporting botanicals.',
    imageWidth: 265,
    imageHeight: 760,
    detailHeroImageClass: 'max-w-[130px] object-contain md:max-w-[152px] lg:max-w-[168px]',
    splitPanel: defaultPdpSplitPanel,
  },
  {
    id: 2,
    headline: 'SEAL',
    name: 'Rich Shea Seal & Nourishment',
    price: '$48.00',
    image: '/assets/eumero-shea.png',
    description: sheaParagraphs.join(' '),
    bodyParagraphs: sheaParagraphs,
    accordionTitle: 'Powered by shea and sealing butters.',
    accordionBody:
      'Unrefined shea and complementary emollients help lock in hydration and reduce friction on the cuticle for hair that feels supple and controlled.',
    imageWidth: 526,
    imageHeight: 530,
    splitPanel: defaultPdpSplitPanel,
  },
]
