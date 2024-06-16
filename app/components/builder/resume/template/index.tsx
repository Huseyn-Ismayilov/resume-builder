'use client'
import React, { useEffect, useState } from 'react'
import { useResume } from '@/app/context/ResumeContext'

const Template = () => {
  const { resumeData } = useResume()

  if (!resumeData) {
    return <div>Resume Data Loading...</div>
  }
  return (
    <div className='grow'>
      <div className='w-full max-w-screen-lg mx-auto px-6'>
        <div className='full-name flex items-center gap-4 text-black/80'>
          <span className='first-name text-4xl font-bold'>
            {resumeData.firstName}
          </span>
          <span className='last-name text-4xl font-bold'>
            {resumeData.lastName}
          </span>
        </div>
        <div className='email'>
          <p>Email: {resumeData.email}</p>
        </div>
        <div className='phone'>
          <p>Phone: {resumeData.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Template
