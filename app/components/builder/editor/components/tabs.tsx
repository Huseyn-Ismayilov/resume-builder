'use client'
import React from 'react'
// components/Tabs.tsx
import { useState, ReactNode } from 'react'

interface TabProps {
  title: string
  children: ReactNode
}

const Tabs: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className='h-full inline-flex bg-white dark:bg-black/90'>
      <div className='h-full w-60 border-r border-black/20'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const tabProps = child.props as TabProps
            return (
              <button
                className={`flex items-center justify-between text-sm font-semibold tracking-tight w-full p-5 border-b border-black/20 dark:text-white ${index === activeTab ? 'bg-gray-100 hover:bg-gray-200/60': 'hover:bg-gray-100/40'}`}
                onClick={e => {
                  e.preventDefault()
                  handleTabClick(index)
                }}
              >
                {tabProps.title}
                <div>
                  {index === activeTab ? (
                    <svg
                      className='size-3'
                      viewBox='0 0 28 4'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2 2H26'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='size-3'
                      viewBox='0 0 28 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2 14H26M14 2V26'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </div>
              </button>
            )
          }
          return null // or return a default element if needed
        })}
      </div>

      <div className='h-full p-5 w-72 border-r border-black/20 overflow-y-auto'>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  )
}

export default Tabs
