// import Editor from './components/Builder/Editor'
// import Resume from './components/Builder/resume'
'use client'
// import useDarkModeListener from './hooks/useSystemTheme'
import Link from 'next/link'

export default function Home () {
  // const data = useDarkModeListener()

  return (
    <main className='p-24'>
      <div className='flex'>
        {/* <h1 className='text-2xl'>{data}</h1> */}
        <Link href='/builder'>Builder</Link>
      </div>
    </main>
  )
}
