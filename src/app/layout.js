import './globals.scss'
import { Montserrat } from 'next/font/google'
import { Navbar, Footer } from '@/components/layout'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | OSSTEC',
    default: 'OSSTEC',
  },
  description: 'Additive Manufactured Orthopedic Implants',
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-icon.png',
  },
  generator: 'Next.js',
  applicationName: 'OSSTEC Website',
  referrer: 'origin-when-cross-origin',
  keywords: ['Implants', 'Orthopaedics', '3D Printing', 'Additive Manufacturing', 'Knee Replacement', 'Partial Knee Replacement', 'Knee Implant', 'Orthopaedic Implant', 'Imperial College London', 'Start-up', 'Spin-out', 'Spin-out Company', 'London', 'UK'],
  authors: [{ name: 'Rohit Nag', url: 'https://rohitnag.com' }],
  colorScheme: 'light',
  creator: 'Rohit Nag',
  publisher: 'OSSTEC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
