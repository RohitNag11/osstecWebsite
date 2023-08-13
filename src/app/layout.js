import './globals.scss'
import { Inter } from 'next/font/google'
import { Josefin_Sans } from 'next/font/google'
// import { Navbar } from '@/components/Layout'
import Navbar from '@/components/Layout/Navbar'

const inter = Inter({ subsets: ['latin'] })
const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'OSSTEC',
  description: 'Additive Manufactured Orthopedic Implants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
