// import Editor from './components/Builder/Editor'
// import Resume from './components/Builder/resume'
import Link from 'next/link'
export default function Home () {
  return (
    <main className=' p-24'>
      <div className='flex'>
        <Link href='/builder'>Builder</Link>
      </div>
    </main>
  )
}
