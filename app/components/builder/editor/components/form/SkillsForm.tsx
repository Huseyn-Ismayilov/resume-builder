'use client'
import React, { useState, useEffect } from 'react'
import { useResume } from '../../../../../context/ResumeContext'
import FormItem from '../FormItem'

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResume()

  const [skillsList, setSkillsList] = useState(
    Array.isArray(resumeData.skills) && resumeData.skills.length > 0
      ? resumeData.skills
      : [{ skill: '' }, { skill: '' }] 
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
            label={index == 0 ? 'Skills' : ''}
            placeholder='Your Skill'
            type={'input'}
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

      <button
        className='text-sm flex items-center gap-2 font-semibold text-center p-2 text-black transition-all group'
        onClick={addSkill}
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
        Add Skill
      </button>
    </form>
  )
}

export default SkillsForm
