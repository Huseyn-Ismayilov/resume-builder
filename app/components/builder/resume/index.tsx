'use client'
import ProfessionalResume from '@/app/template/professionResume';

const Resume = () => {
  return (
    <div className='grow overflow-y-auto'>
      <div className='w-full max-w-screen-lg mx-auto py-10'>
          <ProfessionalResume />
      </div>
    </div>
  );
};

export default Resume;
