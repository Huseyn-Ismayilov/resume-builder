'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { ResumeProvider } from './context/ResumeContext'
import { PDFProvider } from './context/PdfContext'
import useDarkModeListener from './hooks/useSystemTheme'

const inter = Inter({ subsets: ['latin'] })

// const data = useDarkModeListener()
// console.log(useDarkModeListener);
// console.log(data);

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  
  return (
    <html lang='en'>
      <body className={inter.className}>
        <PDFProvider>
          <ResumeProvider>{children}</ResumeProvider>
        </PDFProvider>
      </body>
    </html>
  )
}
