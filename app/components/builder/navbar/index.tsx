import { Button } from '@nextui-org/button'
import Image from 'next/image'
import profilePic from '/public/avatar.jpeg'

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
        <Button
          color='primary'
          variant='shadow'
          className='font-medium rounded-md text-white'
        >
          Share
        </Button>
      </div>
    </div>
  )
}

export default Navbar
