import './globals.scss'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components/layout'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OSSTEC',
  description: 'Additive Manufactured Orthopedic Implants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
