import { forwardRef, type InputHTMLAttributes } from 'react'
import { Input as Root } from '~/ui/input'
import { HRLabel } from '../Label/Label'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Label?: string
  subLabel?: string
  isRequired?: boolean
  inputClassName?: string
  labelClassName?:string
  error?: string 
}
export const HRInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      placeholder,
      inputClassName,
      labelClassName,
      error,
      Label,
      isRequired,
      subLabel,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {Label && (
        <div className="flex gap-1">
          
            <HRLabel labelClassName={`text-[14px] text-[#09090B] font-medium leading-5 ${labelClassName}`}>
              {Label}
            </HRLabel>
          {isRequired && <span className="text-red-500">*</span>}
        </div>
          )}

        {subLabel && (
          <div className="text-[14px] text-[#71717A] font-normal leading-5">
            {subLabel}
          </div>
        )}
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
  },
)
