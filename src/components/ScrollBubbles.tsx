'use client'

import { useEffect, useMemo, useRef } from 'react'

function ScrollBubbles() {
   const containerRef = useRef<HTMLDivElement | null>(null)
   const timeoutRef = useRef<number | null>(null)
   const rafRef = useRef<number | null>(null)
  const animationRef = useRef<number | null>(null)
  const bubblesRef = useRef<HTMLSpanElement[]>([])
  const velocityRef = useRef<{ vx: number; vy: number }[]>([])
 
  const bubbleSpecs = useMemo(
    () => [
      { size: 'bubble-sm', position: 'scroll-pos-1' },
      { size: 'bubble-md', position: 'scroll-pos-2' },
      { size: 'bubble-lg', position: 'scroll-pos-3' },
      { size: 'bubble-sm', position: 'scroll-pos-4' },
      { size: 'bubble-md', position: 'scroll-pos-5' },
    ],
    []
  )

   useEffect(() => {
     const container = containerRef.current
     if (!container) {
       return
     }
 
    const bubbleNodes = bubblesRef.current
    if (bubbleNodes.length) {
      velocityRef.current = bubbleNodes.map(() => ({
        vx: (Math.random() * 2 - 1) * 0.3,
        vy: (Math.random() * 2 - 1) * 0.3,
      }))
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
      const scrollInfluence = Math.max(-6, Math.min(6, scrollDelta / 6))

      bubbleNodes.forEach((bubble, index) => {
        const rect = bubble.getBoundingClientRect()
        const vx = velocityRef.current[index]?.vx ?? 0
        const vy = velocityRef.current[index]?.vy ?? 0
        const nextX = rect.left + vx * delta + scrollInfluence
        const nextY = rect.top + vy * delta - scrollInfluence * 0.4

        bubble.style.left = `${Math.max(0, Math.min(window.innerWidth - rect.width, nextX))}px`
        bubble.style.top = `${Math.max(0, Math.min(window.innerHeight - rect.height, nextY))}px`
      })

      lastScrollY = window.scrollY
      lastScrollTime = now
      animationRef.current = window.requestAnimationFrame(animate)
    }

    animationRef.current = window.requestAnimationFrame(animate)
     window.addEventListener('scroll', onScroll, { passive: true })
 
     return () => {
       window.removeEventListener('scroll', onScroll)
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
      {bubbleSpecs.map((spec, index) => (
        <span
          key={`${spec.size}-${index}`}
          ref={(node) => {
            if (node) {
              bubblesRef.current[index] = node
            }
          }}
          className={`scroll-bubble ${spec.size} ${spec.position}`}
        />
      ))}
     </div>
   )
 }
 
 export default ScrollBubbles
