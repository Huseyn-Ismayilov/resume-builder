'use client'
// ResumeContext.tsx dosyası
// ResumeContext.tsx
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ProfileData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
}

interface EducationData {
  schoolName: string
  degree: string
  graduationYear: string
}
interface SkilsData {
  skill: string
}

interface ResumeData {
  profile: ProfileData
  education: EducationData
  skills: SkilsData
}

interface ResumeContextType {
  resumeData: ResumeData
  updateResumeData: (data: Partial<ResumeData>) => void
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export const ResumeProvider: React.FC = ({ children }: any) => {
  const initialResumeData: ResumeData = {
    profile: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    },
    education: {
      schoolName: '',
      degree: '',
      graduationYear: ''
    },
    skills: {
      skill: ''
    }
  }

  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)

  useEffect(() => {
    const storedData = localStorage.getItem('resumeData')
    if (storedData) {
      setResumeData(JSON.parse(storedData))
    }
  }, [])

  const updateResumeData = (data: Partial<ResumeData>) => {
    const updatedData = { ...resumeData, ...data }
    setResumeData(updatedData)
    localStorage.setItem('resumeData', JSON.stringify(updatedData))
  }

  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
      {children}
    </ResumeContext.Provider>
  )
}

export const useResume = () => {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
