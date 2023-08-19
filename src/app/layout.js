import './globals.scss'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'

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
      </body>
    </html>
  )
}
