import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from '@/components/providers/ToasterProvider'
import LoginModal from '@/components/modals/LoginModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
