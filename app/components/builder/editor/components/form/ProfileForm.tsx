// ProfileForm.tsx
'use client'

import React from 'react';
import { useResume } from '@/app/context/ResumeContext';
import FormItem from '../FormItem';
import RichTextArea from '../RichText';

const ProfileForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedProfile = { ...resumeData.profile, [name]: value };
    updateResumeData({ profile: updatedProfile });
  };

  return (
    <form className='sw-full mb-10'>
      <div className='mb-4'>
        <FormItem
          label='Full Name'
          type='text'
          name='fullName'
          value={resumeData.profile.fullName}
          onChange={handleChange}
          placeholder='Full Name'
        />
      </div>
      <div className='mb-4'>
        <FormItem
          label='Job Title'
          type='text'
          name='jobTitle'
          value={resumeData.profile.jobTitle}
          onChange={handleChange}
          placeholder='Job title'
        />
      </div>
      <div className='mb-4'>
        <FormItem
          label='Email'
          type='email'
          name='email'
          value={resumeData.profile.email}
          onChange={handleChange}
          placeholder='Email'
        />
      </div>
      <div className='mb-4'>
        <FormItem
          label='Phone number'
          type='tel'
          name='phone'
          value={resumeData.profile.phone}
          onChange={handleChange}
          placeholder='Phone'
        />
      </div>
      <div className='mb-4'>
        <RichTextArea
          label='Address'
          name='address'
          noResize='resize'
          value={resumeData.profile.address}
          onChange={handleChange}
          placeholder='Your Address'
        />
      </div>
    </form>
  );
};

export default ProfileForm;
