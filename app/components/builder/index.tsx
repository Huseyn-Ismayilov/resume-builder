'use client'
import Editor from './editor'
import Resume from './resume'
import Navbar from './navbar'

const BuilderLayout = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex h-dvh overflow-hidden pt-16'>
        <Editor />
        <Resume />
      </div>
    </div>
  )
}

export default BuilderLayout


