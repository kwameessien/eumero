'use client'

import { useEffect, useRef } from 'react'

function ScrollBubbles() {
   const containerRef = useRef<HTMLDivElement | null>(null)
   const timeoutRef = useRef<number | null>(null)
   const rafRef = useRef<number | null>(null)
  const animationRef = useRef<number | null>(null)
  const bubblesRef = useRef<HTMLSpanElement[]>([])
  const velocityRef = useRef<{ vx: number; vy: number }[]>([])
  const positionRef = useRef<{ x: number; y: number }[]>([])

   useEffect(() => {
     const container = containerRef.current
     if (!container) {
       return
     }
 
    const bubbleNodes = bubblesRef.current
    const initBubbles = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      positionRef.current = bubbleNodes.map((bubble) => {
        const rect = bubble.getBoundingClientRect()
        const x = Math.random() * (width - rect.width)
        const y = Math.random() * (height - rect.height)
        bubble.style.left = `${x}px`
        bubble.style.top = `${y}px`
        return { x, y }
      })
      velocityRef.current = bubbleNodes.map(() => ({
        vx: (Math.random() * 2 - 1) * 1.4,
        vy: (Math.random() * 2 - 1) * 1.4,
      }))
    }

    if (bubbleNodes.length) {
      initBubbles()
    }

    let lastScrollY = window.scrollY
    let lastScrollTime = performance.now()

     const onScroll = () => {
       if (rafRef.current) {
         return
       }
 
       rafRef.current = window.requestAnimationFrame(() => {
         container.classList.add('is-active')
         if (timeoutRef.current) {
           window.clearTimeout(timeoutRef.current)
         }
         timeoutRef.current = window.setTimeout(() => {
           container.classList.remove('is-active')
         }, 400)
         rafRef.current = null
       })
     }
 
    const animate = () => {
      const now = performance.now()
      const delta = Math.min(32, now - lastScrollTime)
      const scrollDelta = window.scrollY - lastScrollY
      const scrollInfluence = Math.max(-14, Math.min(14, scrollDelta / 4))

      const width = window.innerWidth
      const height = window.innerHeight

      bubbleNodes.forEach((bubble, index) => {
        const rect = bubble.getBoundingClientRect()
        const velocity = velocityRef.current[index] ?? { vx: 0, vy: 0 }
        const position = positionRef.current[index] ?? { x: rect.left, y: rect.top }

        let nextX = position.x + velocity.vx * (delta / 8) + scrollInfluence * 1.2
        let nextY = position.y + velocity.vy * (delta / 8) - scrollInfluence * 0.6

        if (nextX <= 0 || nextX >= width - rect.width) {
          velocity.vx *= -1
          nextX = Math.max(0, Math.min(width - rect.width, nextX))
        }
        if (nextY <= 0 || nextY >= height - rect.height) {
          velocity.vy *= -1
          nextY = Math.max(0, Math.min(height - rect.height, nextY))
        }

        positionRef.current[index] = { x: nextX, y: nextY }
        velocityRef.current[index] = velocity
        bubble.style.left = `${nextX}px`
        bubble.style.top = `${nextY}px`
      })

      lastScrollY = window.scrollY
      lastScrollTime = now
      animationRef.current = window.requestAnimationFrame(animate)
    }

    animationRef.current = window.requestAnimationFrame(animate)
     window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', initBubbles)
 
     return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', initBubbles)
       if (timeoutRef.current) {
         window.clearTimeout(timeoutRef.current)
       }
       if (rafRef.current) {
         window.cancelAnimationFrame(rafRef.current)
       }
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current)
      }
     }
   }, [])
 
  return (
    <div ref={containerRef} className="scroll-bubbles" aria-hidden="true">
      {['bubble-sm', 'bubble-md', 'bubble-lg', 'bubble-sm', 'bubble-md', 'bubble-lg'].map((size, index) => (
        <span
          key={`${size}-${index}`}
          ref={(node) => {
            if (node) {
              bubblesRef.current[index] = node
            }
          }}
          className={`scroll-bubble ${size}`}
        />
      ))}
    </div>
  )
 }
 
 export default ScrollBubbles
