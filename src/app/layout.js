import './globals.scss'
import { Inter, Raleway, Montserrat, Open_Sans, Lato } from 'next/font/google'
import { Navbar, Footer } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700'], })

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
