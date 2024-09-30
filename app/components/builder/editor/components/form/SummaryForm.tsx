'use client'
// EducationForm.tsx
import React, { useState, useEffect } from 'react';
import { useResume } from '../../../../../context/ResumeContext' 
import RichTextArea from '../RichText';
const SummaryForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedSummary = { ...resumeData.summary, [name]: value };
    updateResumeData({ summary: updatedSummary });
  };
  console.log(resumeData.summary)
  
  return (
    <form className='block w-full'>
      <RichTextArea
        label='Summary'
        name='about'
        value={resumeData.summary.about}
        onChange={handleChange}
        minHeight='min-h-56'
        placeholder='About you'
      />
    </form>
  );
};

export default SummaryForm;
