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

    const animate = () => {
      currentX += (targetX - currentX) * 0.2
      currentY += (targetY - currentY) * 0.2
      bubble.style.transform = `translate(${currentX}px, ${currentY}px)`
      rafId = window.requestAnimationFrame(animate)
    }

    rafId = window.requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={bubbleRef} className="cursor-bubble" aria-hidden="true" />
}

export default CursorBubble
