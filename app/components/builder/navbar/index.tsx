'use client'
import Image from 'next/image'
import profilePic from '/public/avatar.jpeg'
import { Button } from '@nextui-org/button'
import PrintButton from '../../pdfExport/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='absolute left-0 top-0 py-3 w-full px-8 bg-white dark:bg-black h-16 border-b border-black/20 flex items-center justify-between'>
      <div className='flex items-center'>
        <Image
          src={profilePic}
          className='size-12 rounded-full border border-black/30'
          alt='Profile Picture'
        />
        <div className='flex items-center gap-1 text-sm ml-8'>
          <Link href='' className='block font-medium p-1 opacity-50 hover:opacity-60'>Home</Link>
          <span>/</span>
          <Link href='' className='block font-medium p-1 opacity-90 hover:opacity-100'>Create resume</Link>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        {/* <Button
          color='primary'
          variant='bordered'
          className='font-semibold rounded-md'
        >
          Download
        </Button> */}
        <PrintButton />
      </div>
    </div>
  )
}

export default Navbar
