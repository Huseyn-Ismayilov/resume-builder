'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { ResumeProvider } from './context/ResumeContext'
import { PrintProvider } from './context/PdfRefContext'
import useDarkModeListener from './hooks/useSystemTheme'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const dataTheme = useDarkModeListener()

  return (
    <html lang='en'>
      <body className={`${inter.className} bg-main dark:bg-black/70`}>
        <PrintProvider>
          <ResumeProvider>{children}</ResumeProvider>
        </PrintProvider>
      </body>
    </html>
  )
}
