'use client'

import { useEffect, useRef } from 'react'

function CursorBubble() {
  const bubbleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bubble = bubbleRef.current
    if (!bubble) {
      return
    }

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let rafId = 0

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        return false
      }
      return Boolean(target.closest('a, button, [role="button"], input, select, textarea'))
    }

    const onPointerOver = (event: PointerEvent) => {
      if (isInteractive(event.target)) {
        bubble.classList.add('is-glowing')
      }
    }

    const onPointerOut = (event: PointerEvent) => {
      if (isInteractive(event.target)) {
        bubble.classList.remove('is-glowing')
      }
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.2
      currentY += (targetY - currentY) * 0.2
      bubble.style.transform = `translate(${currentX}px, ${currentY}px)`
      rafId = window.requestAnimationFrame(animate)
    }

    rafId = window.requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('pointerover', onPointerOver, { passive: true })
    window.addEventListener('pointerout', onPointerOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('pointerover', onPointerOver)
      window.removeEventListener('pointerout', onPointerOut)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={bubbleRef} className="cursor-bubble" aria-hidden="true" />
}

export default CursorBubble
