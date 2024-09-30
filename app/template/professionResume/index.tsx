// import { useResume } from '@/context/ResumeContext'
// import { usePrintContext } from '@/context/PdfRefContext'

import { useResume } from '../../context/ResumeContext'
import { usePrintContext } from '../../context/PdfRefContext'

const ProfessionalResume = () => {
  const { resumeData } = useResume()
  const { ref } = usePrintContext()
  // console.log(resumeData)
  console.log(resumeData.skills)

  if (!resumeData) {
    return <div>Data Loading...</div>
  }
  return (
    <div
      className='scale-75 origin-top aspect-[1/1.414] bg-white text-black/90'
      style={{ fontFamily: ' Helvetica, "Trebuchet MS", Verdana, sans-serif' }}
    >
      <div ref={ref} className='bg-white overflow-hidden'>
        <div className='p-6 pb-0'>
          <div className='px-10 bg-blue-800 rounded-2xl text-white py-12'>
            <h1 className='text-5xl font-bold mb-4'>
              {resumeData.profile.fullName
                ? resumeData.profile.fullName
                : 'Your Name'}
            </h1>
            <h4 className='text-2xl'>
              {resumeData.profile.jobTitle
                ? resumeData.profile.jobTitle
                : 'Your Job'}
            </h4>
          </div>
        </div>
        <div className='px-16'>
          {resumeData.profile.email ||
          resumeData.profile.phone ||
          resumeData.profile.address ? (
            <div className='flex justify-stretch gap-16 my-10'>
              {(resumeData.profile.email ? resumeData.profile.email : 'asd') && (
                <div className='w-full'>
                  <div className='text-xl font-medium'>
                    <span className='text-black/30'>Email</span>
                    <br />
                    <a
                      href={`mailto:${resumeData.profile.email}`}
                      target='_blank'
                    >
                      {resumeData.profile.email}
                    </a>
                  </div>
                </div>
              )}
              {resumeData.profile.phone && (
                <div className='w-full'>
                  <div className='text-xl font-medium'>
                    <span className='text-black/30'>Phone </span>
                    <br />
                    <a href={`tel:${resumeData.profile.phone}`} target='_blank'>
                      {resumeData.profile.phone}
                    </a>
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
            <>
              <div className='my-8'>
                <h3 className='text-2xl font-extrabold mb-3'>About</h3>
                <p className='text-xl font-medium'>
                  {resumeData.summary.about}
                </p>
              </div>
              <div className='w-full h-px bg-black/10 my-8'></div>
            </>
          )}
          {resumeData.experience[0].JobName && (
            <div className='my-8'>
              <h3 className='text-2xl font-extrabold mb-7'>Experience</h3>
              {resumeData.experience.map((experience, index) => (
                <div key={index}>
                  <div className='flex items-center justify-between max-w-3xl mb-8'>
                    <div>
                      <h2 className='text-2xl text-black/70 font-semibold mb-1'>
                        {experience.JobName}
                      </h2>
                      <h3 className='text-xl opacity-60'>
                        {experience.Company}
                      </h3>
                    </div>
                    <span className='block text-black/70 px-5 py-2 bg-black/5 text-lg font-semibold rounded-full'>
                      {experience.Year}
                    </span>
                  </div>
                </div>
              ))}
              <div className='w-full h-px bg-black/10 my-8'></div>
            </div>
          )}
          {resumeData.education[0].schoolName && (
            <>
              <div>
                <h3 className='text-2xl font-extrabold mb-7'>Education</h3>
                {resumeData.education.map((education, index) => (
                  <div key={index}>
                    <div className='flex items-center justify-between max-w-3xl mb-8'>
                      <div>
                        <h2 className='text-2xl font-semibold text-black/70 mb-1'>
                          {education.degree}
                        </h2>
                        <h3 className='text-xl opacity-60'>
                          {education.schoolName}
                        </h3>
                      </div>
                      <span className='block text-black/70 px-5 py-2 bg-black/5 text-lg font-semibold rounded-full'>
                        {education.graduationYear}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='w-full h-px bg-black/10 my-8'></div>
            </>
          )}
          {Array.isArray(resumeData.skills) &&
            resumeData.skills.some(item => item.skill !== '') && (
              <div className='my-8'>
                <h3 className='text-2xl font-extrabold mb-7'>Skills</h3>
                <div className='flex flex-wrap gap-4'>
                  {resumeData.skills.map(
                    (item, index) =>
                      item.skill !== '' && (
                        <div className='text-xl px-5 py-2 bg-black/5 rounded-full'>
                          {item.skill}
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalResume
