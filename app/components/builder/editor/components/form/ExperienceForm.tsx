'use client'
import { Button } from '@nextui-org/button'
import React, { useState } from 'react'
import { useResume } from '@/app/context/ResumeContext'
import FormItem from '../FormItem'
import { log } from 'console'

const experienceForm = () => {
  const { resumeData, updateResumeData } = useResume()

  const [experienceList, setexperienceList] = useState(
    Array.isArray(resumeData.experience) ? resumeData.experience : []
  )
  console.log(experienceList)
  const handleChange = (index, e) => {
    const { name, value } = e.target
    const updatedexperienceList = experienceList.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    )
    setexperienceList(updatedexperienceList)
    updateResumeData({ experience: updatedexperienceList })
  }

  const addexperience = () => {
    if (experienceList.length < 4) {
      setexperienceList([
        ...experienceList,
        { JobName: '', Company: '', Year: '' }
      ])
    }
  }

  const removeexperience = index => {
    const updatedexperienceList = experienceList.filter((_, i) => i !== index)
    setexperienceList(updatedexperienceList)
    updateResumeData({ experience: updatedexperienceList })
  }

  return (
    <form className='block w-full'>
      {experienceList.map((experience, index) => (
        <div key={index} className='mb-7 relative'>
          {index !== 0 && (
            <div className='flex items-center justify-between mb-4'>
              <h4 className='font-semibold'>Block {index + 1}</h4>
              {index !== 0 && (
                <button
                  type='button'
                  onClick={() => removeexperience(index)}
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
            name='JobName'
            value={experience.JobName}
            onChange={e => handleChange(index, e)}
            placeholder='Job title'
          />
          <FormItem
            label='Company'
            type='text'
            name='Company'
            value={experience.Company}
            onChange={e => handleChange(index, e)}
            placeholder='Company'
          />
          <FormItem
            label='Year'
            type='text'
            name='Year'
            value={experience.Year}
            onChange={e => handleChange(index, e)}
            placeholder='Year'
          />
        </div>
      ))}

      <Button
        color='primary'
        variant='shadow'
        className='flex items-center gap-2 w-full font-semibold rounded-md text-white dark:text-black dark:bg-white !transition-all'
        onClick={addexperience}
      >
        Add Experience
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M4 12H20M12 4V20'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </Button>
    </form>
  )
}

export default experienceForm