import { forwardRef, type InputHTMLAttributes } from 'react'
import { Input as Root } from '~/ui/input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Label?: string
  subLabel?:string
  isRequired?: boolean  
  inputClassName?: string
  error?: string | undefined
}
export const HRInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      placeholder,
      inputClassName,
      error,
      Label,
      isRequired,
      subLabel,
      ...props
    },
    ref
  ) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex gap-1'>
      <label className='text-[14px] text-[#09090B] font-medium leading-5'>{Label}</label> 
      {isRequired && <span className='text-red-500'>*</span>} 
      </div>  
      <div className='text-[14px] text-[#71717A] font-normal leading-5'>{subLabel}</div>
      <Root
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        ref={ref}  
        {...props}
      />
      {error && <div className="text-[14px] text-red-500">{error}</div>}
    </div>
  )

}
)
