import { Inter } from 'next/font/google'
import './globals.css'
import './App.css'
import MainLayout from '@/layouts/MainLayout'

export const metadata = {
  title: 'Dramaticad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-50'>

        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
