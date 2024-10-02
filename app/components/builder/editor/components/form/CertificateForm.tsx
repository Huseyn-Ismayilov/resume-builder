'use client'
import React, { useState } from 'react'
import { useResume } from '../../../../../context/ResumeContext'
import FormItem from '../FormItem'

const CertificateForm = () => {
  const { resumeData, updateResumeData } = useResume()
  const [certificateList, setCertificateList] = useState(
    Array.isArray(resumeData.certificates) ? resumeData.certificates : []
  )

  console.log(resumeData);
  
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const updatedCertificateList = certificateList.map((certificates, i) =>
      i === index ? { ...certificates, [name]: value } : certificates
    )
    setCertificateList(updatedCertificateList)
    updateResumeData({ certificates: updatedCertificateList })
  }

  const addCertificate = () => {
    if (certificateList.length < 4) {
      setCertificateList([
        ...certificateList,
        { Title: '', Company: '', Year: '' }
      ])
    }
  }

  const removeCertificate = (index: number) => {
    const updatedCertificateList = certificateList.filter((_, i) => i !== index)
    setCertificateList(updatedCertificateList)
    updateResumeData({ certificates: updatedCertificateList })
  }

  return (
    <form className='block w-full'>
      {certificateList.map((certificate, index) => (
        <div key={index} className='mb-7 relative'>
          {index !== 0 && (
            <div className='flex items-center justify-between mb-4'>
              <h4 className='font-semibold'>Block {index + 1}</h4>
              {index !== 0 && (
                <button
                  type='button'
                  onClick={() => removeCertificate(index)}
                  className='hover:scale-110 transition-all'
                >
                  <svg
                    width='25'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z'
                      fill='#D63F3F'
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          <FormItem
            label='Job title'
            type='text'
            name='Title'
            value={certificate.Title}
            onChange={e => handleChange(index, e)}
            placeholder='Job title'
          />
          <FormItem
            label='Company'
            type='text'
            name='Company'
            value={certificate.Company}
            onChange={e => handleChange(index, e)}
            placeholder='Company'
          />
          <FormItem
            label='Year'
            type='text'
            name='Year'
            value={certificate.Year}
            onChange={e => handleChange(index, e)}
            placeholder='Year'
          />
        </div>
      ))}
      <button
        className='text-sm flex items-center gap-2 font-semibold text-center text-black transition-all group'
        onClick={addCertificate}
        type='button'
      >
         <div className='flex items-center justify-center size-6 rounded-full bg-black text-white group-hover:scale-110 group-active:scale-90 transition-all'>
          <svg
            width='13'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 10H18M10 2V18'
              stroke='currentColor'
              strokeWidth='3.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        Add Certificate
      </button>
    </form>
  )
}

export default CertificateForm
