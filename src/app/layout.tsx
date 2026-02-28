import './globals.css'
import type { ReactNode } from 'react'
import { Arapey, Inria_Sans } from 'next/font/google'

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inria',
})

const arapey = Arapey({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-arapey',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} ${arapey.variable} bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}
