'use client'
import React, { useState, useEffect } from 'react'
import { useResume } from '../../../../../context/ResumeContext'
import FormItem from '../FormItem'
import { Button } from '@nextui-org/button'

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResume()

  const [skillsList, setSkillsList] = useState(
    Array.isArray(resumeData.skills) && resumeData.skills.length > 0
      ? resumeData.skills
      : [{ skill: '' }, { skill: '' }] // Varsayılan iki boş giriş
  )
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const updateSkillsList = skillsList.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    )
    setSkillsList(updateSkillsList)
    updateResumeData({ skills: updateSkillsList })
  }

  const addSkill = () => {
      setSkillsList([...skillsList, { skill: '' }, { skill: '' }])
  }

  const removeSkill = (index: number) => {
    const updateSkillsList = skillsList.filter((_, i) => i !== index)
    setSkillsList(updateSkillsList)
    updateResumeData({ skills: updateSkillsList })
  }

  return (
    <form className='flex flex-wrap items-end -mx-1'>
      {skillsList.map((item, index) => (
        <div className='relative w-1/2 px-1' key={index}>
          <FormItem
            name='skill'
            value={item.skill}
            onChange={e => handleChange(index, e)}
            label={index == 0 && 'Skills'}
            placeholder='Your Skill'
          />
          {index !== 0 && (
            <button
              type='button'
              onClick={() => removeSkill(index)}
              className='absolute top-2.5 right-2.5 hover:scale-110 transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M7 7.00006L17 17.0001M7 17.0001L17 7.00006'
                  stroke='#D63F3F'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          )}
        </div>
      ))}

      <Button
        color='primary'
        variant='shadow'
        className='flex items-center gap-2 w-full font-semibold rounded-md text-white dark:text-black dark:bg-white !transition-all'
        onClick={addSkill}
      >
        Add Skill
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M4 12H20M12 4V20'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
    </form>
  )
}

export default SkillsForm
