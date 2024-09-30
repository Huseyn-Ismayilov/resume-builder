'use client'
// EducationForm.tsx
import React, { useState, useEffect } from 'react'
import { useResume } from '../../../../../context/ResumeContext'
import FormItem from '../FormItem'
import { Button } from '@nextui-org/button'

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResume()

  const [skillsList, setSkillsList] = useState(
    Array.isArray(resumeData.skills) ? resumeData.skills : []
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
    updateResumeData({ skill: updateSkillsList })
  }

  const addSkill = () => {
    if (skillsList.length < 4) {
      setSkillsList([...skillsList, { skill: '' }])
    }
  }

  return (
    <form className='block w-full'>
      {skillsList.map((item, index) => (
        <FormItem
          label='Skills'
          name='skill'
          value={item.skills}
          onChange={handleChange}
          placeholder='About you'
        />
      ))}

      <Button
        color='primary'
        variant='shadow'
        className='flex items-center gap-2 w-full font-semibold rounded-md text-white dark:text-black dark:bg-white !transition-all'
        onClick={addSkill}
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

export default SkillsForm
