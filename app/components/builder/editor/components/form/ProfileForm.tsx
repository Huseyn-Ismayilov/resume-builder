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
          label='First Name'
          type='text'
          name='firstName'
          value={resumeData.profile.firstName}
          onChange={handleChange}
          placeholder='First Name'
        />
      </div>
      <div className='mb-4'>
        <FormItem
          label='Last Name'
          type='text'
          name='lastName'
          value={resumeData.profile.lastName}
          onChange={handleChange}
          placeholder='Last Name'
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
          value={resumeData.profile.address}
          onChange={handleChange}
          placeholder='Your Address'
        />
      </div>
    </form>
  );
};

export default ProfileForm;
