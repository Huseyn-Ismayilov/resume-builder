import React from 'react'

interface TextareaWithLabelProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  noResize?: string
  minHeight?: string
}

const RichTextArea: React.FC<TextareaWithLabelProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  noResize,
  minHeight
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block mb-1 text-xs font-medium'>
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-20 border border-black/20 focus:outline-black text-sm rounded-md font-semibold placeholder:font-normal placeholder:text-xs px-4 py-3 ${noResize && 'resize-none'} ${minHeight}`}
      />
    </div>
  )
}

export default RichTextArea
