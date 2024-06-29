'use client'
import Image from 'next/image'
import profilePic from '/public/avatar.jpeg'
import ExportPDFButton from '../../PDFexport/button'
import { Button } from '@nextui-org/button'

const Navbar = () => {
  return (
    <div className='absolute left-0 top-0 py-3 w-full px-8  bg-white h-16 border-b border-black/20 flex items-center justify-between'>
      <div>
        <Image
          src={profilePic}
          className='size-12 rounded-full border border-black/30'
          alt='Profile Picture'
        />
      </div>
      <div className='flex items-center gap-4'>
        <Button
          color='primary'
          variant='bordered'
          className='font-semibold rounded-md'
        >
          Download
        </Button>
        <ExportPDFButton contentId='pdf-content' />
      </div>
    </div>
  )
}

export default Navbar
