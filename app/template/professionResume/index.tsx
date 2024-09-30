import { useResume } from '@/app/context/ResumeContext'
import { usePrintContext } from '@/app/context/PdfRefContext'

const ProfessionalResume = () => {
  const { resumeData } = useResume()
  const { ref } = usePrintContext()
  console.log(resumeData)

  if (!resumeData) {
    return <div>Data Loading...</div>
  }
  return (
    <div className=' scale-75 origin-top aspect-[1/1.414] bg-white text-black/90'>
      <div ref={ref} className='bg-white overflow-hidden'>
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
                <div className='w-full'>
                  <div className='text-xl font-medium'>
                    <span className='text-black/30'>Email </span>
                    <br />
                    <span>{resumeData.profile.email}</span>
                  </div>
                </div>
              )}
              {resumeData.profile.phone && (
                <div className='w-full'>
                  <div className='text-xl font-medium'>
                    <span className='text-black/30'>Phone </span>
                    <br />
                    <span>{resumeData.profile.phone}</span>
                  </div>
                </div>
              )}
              {resumeData.profile.address && (
                <div className='w-full'>
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
          {resumeData.summary.about && (
            <div className='mb-10'>
              <h3 className='text-3xl font-bold mb-3'>About</h3>
              <p className='text-xl'>{resumeData.summary.about}</p>
            </div>
          )}
          <div className='w-full h-px bg-black/10 my-10'></div>
          {resumeData.education[0].schoolName && (
            <div>
              <h3 className='text-3xl font-bold mb-7'>Education</h3>
              {resumeData.education.map((education, index) => (
                <div key={index}>
                  <div className='flex items-center justify-between max-w-3xl mb-10'>
                    <div>
                      <h2 className='text-2xl font-semibold mb-1'>
                        {education.degree}
                      </h2>
                      <h3 className='text-xl font-semibold opacity-40'>
                        {education.schoolName}
                      </h3>
                    </div>
                    <span className='block px-5 py-2 bg-black/5 text-lg font-semibold rounded-full'>
                      {education.graduationYear}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalResume
