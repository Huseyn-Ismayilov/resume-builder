// import { useResume } from '@/context/ResumeContext'
// import { usePrintContext } from '@/context/PdfRefContext'

import { useResume } from '../../context/ResumeContext'
import { usePrintContext } from '../../context/PdfRefContext'

const ProfessionalResume = () => {
  const { resumeData } = useResume()
  const { ref } = usePrintContext()
  // console.log(resumeData.skills)

  if (!resumeData) {
    return <div>Data Loading...</div>
  }
  return (
    <div
      className='resume_layout bg-white text-black/85'
      // style={{ fontFamily: ' Helvetica, "Trebuchet MS", Verdana, sans-serif' }}
      style={{    fontFamily: '__Inter_36bd41'}}
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
          <div className='flex justify-stretch gap-16 my-10'>
            {resumeData.profile.email ? (
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
            ) : (
              <div className='w-full'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Email</span>
                  <br />
                  <a target='_blank'>Your E-mail</a>
                </div>
              </div>
            )}
            {resumeData.profile.phone ? (
              <div className='w-full'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Phone </span>
                  <br />
                  <a href={`tel:${resumeData.profile.phone}`} target='_blank'>
                    {resumeData.profile.phone}
                  </a>
                </div>
              </div>
            ) : (
              <div className='w-full'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Phone </span>
                  <br />
                  <a target='_blank'>Your Phone Number</a>
                </div>
              </div>
            )}
            {resumeData.profile.address ? (
              <div className='w-full'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Address </span>
                  <br />
                  <span>{resumeData.profile.address}</span>
                </div>
              </div>
            ) : (
              <div className='w-full'>
                <div className='text-xl font-medium'>
                  <span className='text-black/30'>Address </span>
                  <br />
                  <span>Your Address</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className='my-5'>
              <h3 className='text-2xl font-bold mb-3'>About</h3>
              <p className='text-lg font-medium'>
                {resumeData.summary.about
                  ? resumeData.summary.about
                  : 'Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. Your about information. '}
              </p>
            </div>
            <div className='w-full h-px bg-black/10 my-8'></div>
          </div>
          <div className='my-5'>
            <h3 className='text-2xl font-bold mb-7'>Experience</h3>
            {resumeData.experience.map((experience, index) => (
              <div key={index}>
                <div className='mb-8'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <h2 className='text-2xl text-black/80 font-semibold mb-1'>
                        {experience.JobName
                          ? experience.JobName
                          : 'Software Enginner'}
                      </h2>
                      <span className='block text-black/70 px-5 py-2 bg-black/5 text-lg font-semibold rounded-full'>
                        {experience.Year
                          ? experience.Year
                          : 'Jan 2024 - Present'}
                      </span>
                    </div>
                    <h3 className='text-xl opacity-60'>
                      {experience.Company ? experience.Company : 'Microsoft'}
                    </h3>
                  </div>
                  <ul className='list-disc list-inside mt-2.5'>
                    {experience.accomplishments.length > 0 ? experience.accomplishments.map((item, index) => (
                      <li key={index} className='text-base py-1'>
                        {item}
                      </li>
                    )): ''}
                  </ul>
                </div>
              </div>
            ))}
            <div className='w-full h-px bg-black/10 my-5'></div>
          </div>
          <div className='my-5'>
            <h3 className='text-2xl font-bold mb-7'>Education</h3>
            {resumeData.education.map((education, index) => (
              <div key={index}>
                <div className='flex items-center justify-between mb-5'>
                  <div>
                    <h2 className='text-2xl font-semibold text-black/75 mb-1'>
                      {education.degree ? education.degree : 'Computer Science'}
                    </h2>
                    <h3 className='text-xl opacity-60'>
                      {education.schoolName ? education.schoolName : 'Hardvard'}
                    </h3>
                  </div>
                  <span className='block text-black/70 px-5 py-2 bg-black/5 text-lg font-semibold rounded-full'>
                    {education.graduationYear
                      ? education.graduationYear
                      : 'Jan 2024 - Present'}
                  </span>
                </div>
              </div>
            ))}
            <div className='w-full h-px bg-black/10 my-5'></div>
          </div>
          {Array.isArray(resumeData.skills) &&
            resumeData.skills.some(item => item.skill !== '') && (
              <div className='my-5'>
                <h3 className='text-2xl font-extrabold mb-7'>Skills</h3>
                <div className='flex flex-wrap gap-4'>
                  {resumeData.skills.map(
                    (item, index) =>
                      item.skill !== '' && (
                        <div
                          key={index}
                          className='text-xl px-5 py-2 bg-black/5 rounded-full'
                        >
                          {item.skill}
                        </div>
                      )
                  )}
                </div>
                <div className='w-full h-px bg-black/10 my-5'></div>
              </div>
            )}
          <div className='my-5'>
            <h3 className='text-2xl font-bold mb-7'>Certificates</h3>
            {resumeData.certificates.map((certificate, index) => (
              <div key={index}>
                <div className='flex items-center justify-between mb-8'>
                  <div className='max-w-[65%]'>
                    <h2 className='text-2xl font-semibold text-black/75 mb-1'>
                      {certificate.Title
                        ? certificate.Title
                        : '30 Different Web Projects in 30 Days | HTML, CSS & JS'}
                    </h2>
                    <h3 className='text-xl opacity-60'>
                      {certificate.Company ? certificate.Company : 'Udemy'}
                    </h3>
                  </div>
                  <span className='block text-black/70 px-5 py-2 bg-black/5 text-lg font-semibold rounded-full'>
                    {certificate.Year
                      ? certificate.Year
                      : 'Jan 2024 - Aug 2024'}
                  </span>
                </div>
              </div>
            ))}
            <div className='w-full h-px bg-black/10 my-5'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalResume
