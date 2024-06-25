import { useResume } from '@/app/context/ResumeContext'

const ProfessionalResume = () => {
  const { resumeData } = useResume()

  if (!resumeData) {
    return <div>Resume Data Loading...</div>
  }
  return (
    <div className='resume aspect-[1/1.41] scale-75 origin-top pb-10 bg-white' id='export-content'>
      <div className='p-6 pb-0'>
        <div className='px-10 bg-blue-800 rounded-2xl text-white py-12'>
          <h1 className='text-5xl font-bold mb-4'>
            {resumeData.profile.fullName}
          </h1>
          <h4 className='text-2xl'>{resumeData.profile.jobTitle}</h4>
        </div>
      </div>
      <div className='px-16'>
        {resumeData.profile.email ||
        resumeData.profile.phone ||
        resumeData.profile.address ? (
          <div className='flex justify-stretch gap-16 py-10'>
            {resumeData.profile.email && (
              <div className='max-w-1/3'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Email </span>
                  <br />
                  <span>{resumeData.profile.email}</span>
                </div>
              </div>
            )}
            {resumeData.profile.phone && (
              <div className='max-w-1/3'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Phone </span>
                  <br />
                  <span>{resumeData.profile.phone}</span>
                </div>
              </div>
            )}
            {resumeData.profile.address && (
              <div className='max-w-1/3'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Address </span>
                  <br />
                  <span>{resumeData.profile.address}</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          ''
        )}
        <div>
          <h3 className='text-3xl font-bold mb-3'>About</h3>
          <p className='text-xl leading-relaxed'>{resumeData.summary.about}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalResume
