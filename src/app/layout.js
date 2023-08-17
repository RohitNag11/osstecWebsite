import './globals.scss'
import { Inter } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
})

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
