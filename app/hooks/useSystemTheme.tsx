'use client'
import { useEffect, useState } from 'react'

const useDarkModeListener = () => {
  const [theme, setTheme] = useState('')
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = ({ matches }: { matches: boolean }) => {
      if (matches) {
        console.log('change to dark mode!')
        setTheme('dark')
      } else {
        console.log('change to light mode!')
        setTheme('light')
      }
    }

    // İlk değeri kontrol etmek için
    handleChange(mediaQuery)

    // Tema değişikliklerini dinlemek için event listener eklemek
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup işlemi
    // return () => {
    //   mediaQuery.removeEventListener('change', handleChange)
    // }
  }, [])
  return theme
}

export default useDarkModeListener
