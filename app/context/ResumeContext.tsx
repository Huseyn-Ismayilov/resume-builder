'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ProfileData {
  fullName: string
  email: string
  phone: string
  address: string
  jobTitle: string
}
interface EducationData {
  schoolName: string
  degree: string
  graduationYear: string
}
interface ExperienceData {
  JobName: string
  Company: string
  Year: string
  accomplishments: string[]
}
interface CertificatesData {
  Title: string
  Company: string
  Year: string
}
interface SkillsData {
  skill: string
}
interface SummaryData {
  about: string
}
interface ResumeData {
  profile: ProfileData
  education: EducationData[]
  experience: ExperienceData[]
  skills: SkillsData[]
  summary: SummaryData
  certificates: CertificatesData[]
}

interface ResumeContextType {
  resumeData: ResumeData
  updateResumeData: (data: Partial<ResumeData>) => void
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)


interface ResumeProviderProps {
  children: ReactNode;
}
export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }: any) => {
  const initialResumeData: ResumeData = {
    profile: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      jobTitle: ''
    },
    education: [
      {
        schoolName: '',
        degree: '',
        graduationYear: ''
      }
    ],
    experience: [
      {
        JobName: '',
        Company: '',
        Year: '',
        accomplishments: ['']
      }
    ],
    skills: [],
    summary: {
      about: ''
    },
    certificates: [
      {
        Title: '',
        Company: '',
        Year: ''
      }
    ],
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
