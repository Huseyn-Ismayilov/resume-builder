interface InputWithLabelProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const FormItem: React.FC<InputWithLabelProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block mb-1 text-xs font-medium dark:text-white'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full h-10 border border-black/20 focus:outline-black text-sm rounded-md font-semibold placeholder:font-normal placeholder:text-xs p-4'
      />
    </div>
  )
}

export default FormItem
