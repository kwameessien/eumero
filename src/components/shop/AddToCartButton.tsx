'use client'

import { useCart } from '@/context/CartContext'

type AddToCartButtonProps = {
  className?: string
}

function AddToCartButton({ className }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <button
      type="button"
      onClick={() => addToCart(1)}
      className={className}
    >
      ADD TO CART
    </button>
  )
}

export default AddToCartButton
