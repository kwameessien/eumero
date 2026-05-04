export type Product = {
  id: number
  name: string
  price: string
  image: string
  description?: string
  imageWidth: number
  imageHeight: number
}

const oilDescription =
  'A lightweight botanical oil for scalp and lengths — supports strength and shine when used as part of a steady ritual.'

const sheaDescription =
  'Rich shea conditioning for dry ends — seals moisture and softens without a heavy finish.'

export const products: Product[] = [
  {
    id: 1,
    name: 'Botanical Growth & Strengthening Oil',
    price: '$52.00',
    image: '/assets/eumero-oil.png',
    description: oilDescription,
    imageWidth: 265,
    imageHeight: 760,
  },
  {
    id: 2,
    name: 'Rich Shea Seal & Nourishment',
    price: '$48.00',
    image: '/assets/eumero-shea.png',
    description: sheaDescription,
    imageWidth: 526,
    imageHeight: 530,
  },
  {
    id: 3,
    name: 'Daily Ritual Oil — concentrated',
    price: '$52.00',
    image: '/assets/eumero-oil.png',
    description: oilDescription,
    imageWidth: 265,
    imageHeight: 760,
  },
  {
    id: 4,
    name: 'Shea Butter Replenishing Cream',
    price: '$48.00',
    image: '/assets/eumero-shea.png',
    description: sheaDescription,
    imageWidth: 526,
    imageHeight: 530,
  },
]
