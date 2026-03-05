'use client'

import { useEffect, useRef } from 'react'

function ScrollBubbles() {
   const containerRef = useRef<HTMLDivElement | null>(null)
   const timeoutRef = useRef<number | null>(null)
   const rafRef = useRef<number | null>(null)
 
   useEffect(() => {
     const container = containerRef.current
     if (!container) {
       return
     }
 
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
 
     window.addEventListener('scroll', onScroll, { passive: true })
 
     return () => {
       window.removeEventListener('scroll', onScroll)
       if (timeoutRef.current) {
         window.clearTimeout(timeoutRef.current)
       }
       if (rafRef.current) {
         window.cancelAnimationFrame(rafRef.current)
       }
     }
   }, [])
 
   return (
     <div ref={containerRef} className="scroll-bubbles" aria-hidden="true">
       <span className="scroll-bubble bubble-sm left-[8%] top-[18%]" />
       <span className="scroll-bubble bubble-md right-[12%] top-[24%]" />
       <span className="scroll-bubble bubble-lg left-[18%] top-[55%]" />
       <span className="scroll-bubble bubble-sm right-[20%] top-[64%]" />
       <span className="scroll-bubble bubble-md left-[65%] top-[78%]" />
     </div>
   )
 }
 
 export default ScrollBubbles
