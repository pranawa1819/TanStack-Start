import { Textarea as Root } from '~/ui/textarea'
import React from 'react'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textAreaClassName?: string
  Label?: string
  subLabel?: string
  isRequired?: boolean
  error?: string
}

export const HRTextArea = ({
  placeholder,
  error,
  Label,
  isRequired,
  subLabel,
  textAreaClassName,
  ...props
}: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <label className="text-[14px] text-[#09090B] font-medium leading-5">
          {Label}
        </label>
        {isRequired && <span className="text-red-500">*</span>}
      </div>

      <Root
        placeholder={placeholder}
        className={`w-full box-border ${textAreaClassName}`}
        {...props}
      />

      {subLabel && (
        <div className="text-[14px] text-[#71717A] font-normal leading-5">
          {subLabel}
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}