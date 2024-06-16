'use client'
import { useResume } from '@/app/context/ResumeContext'

const ProfessionalResume = () => {
  const { resumeData } = useResume()

  if (!resumeData) {
    return <div>Resume Data Loading...</div>
  }
  return (
    <div className='resume aspect-[1/1.41] pb-10 bg-white'>
      <div className='px-16 bg-black text-white py-12'>
        <h1 className='text-5xl font-bold mb-4'>
          {resumeData.profile.fullName}
        </h1>
        <h4 className='text-2xl'>{resumeData.profile.jobTitle}</h4>
      </div>
      <div className='px-16'>
        <div className='flex items-center gap-4 py-10'>
          <div className='font-medium'>
            <span className='text-black/20'>Email </span>
            <br />
            <span>{resumeData.profile.email}</span>
          </div>
        </div>

        {/* <div className='phone'>
        <p>Phone: {resumeData.profile.phone}</p>
      </div> */}
      </div>
    </div>
  )
}

export default ProfessionalResume
