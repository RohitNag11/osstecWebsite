import './globals.scss'
import { Montserrat } from 'next/font/google'
import { Navbar, Footer } from '@/components/layout'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'OSSTEC',
  description: 'Additive Manufactured Orthopedic Implants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
