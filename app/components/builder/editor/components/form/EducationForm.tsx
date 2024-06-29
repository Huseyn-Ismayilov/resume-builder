'use client'
// EducationForm.tsx
import React, { useState, useEffect } from 'react';
import { useResume } from '@/app/context/ResumeContext';
import FormItem from '../FormItem';

const EducationForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedEducation = { ...resumeData.education, [name]: value };
    updateResumeData({ education: updatedEducation });
  };
  console.log(resumeData.education);
  return (
    <form className='block w-full'>
      <FormItem
        label='School Name'
        type='text'
        name='schoolName'
        value={resumeData.education.schoolName}
        onChange={handleChange}
        placeholder='School Name'
      />
      <FormItem
        label='Degree'
        type='text'
        name='degree'
        value={resumeData.education.degree}
        onChange={handleChange}
        placeholder='Degree'
      />
      <FormItem
        label='Graduation Year'
        type='text'
        name='graduationYear'
        value={resumeData.education.graduationYear}
        onChange={handleChange}
        placeholder='Graduation Year'
      />
    </form>
  );
};

export default EducationForm;
