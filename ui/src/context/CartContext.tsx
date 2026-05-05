'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'eumero:cart-total-quantity'

const listeners = new Set<() => void>()

function subscribe(callback: () => void) {
  listeners.add(callback)
  function onStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY || event.key === null) callback()
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorage)
  }
  return () => {
    listeners.delete(callback)
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', onStorage)
    }
  }
}

function emit() {
  for (const listener of listeners) listener()
}

function readQuantityFromStorage(): number {
  if (typeof window === 'undefined') return 0
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw == null) return 0
    const n = Number.parseInt(raw, 10)
    return Number.isFinite(n) && n >= 0 ? n : 0
  } catch {
    return 0
  }
}

function getServerSnapshot() {
  return 0
}

function getSnapshot() {
  return readQuantityFromStorage()
}

function persistQuantity(value: number) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value))
  } catch {
    /* ignore */
  }
  emit()
}

type CartContextValue = {
  totalQuantity: number
  addToCart: (quantity?: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const totalQuantity = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const addToCart = useCallback((quantity = 1) => {
    const next = readQuantityFromStorage() + Math.max(0, quantity)
    persistQuantity(next)
  }, [])

  const value = useMemo(
    () => ({
      totalQuantity,
      addToCart,
    }),
    [totalQuantity, addToCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider')
  }
  return ctx
}
