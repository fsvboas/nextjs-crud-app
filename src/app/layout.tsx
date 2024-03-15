import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastProvider } from './libs/react-tostify'
import { TanstackQueryProvider } from './libs/tanstack-query'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Crud Application',
  description: 'NextJS Crud Application made by Felippe Vilas Boas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackQueryProvider>
          <ToastProvider>
            <div>{children}</div>
          </ToastProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
