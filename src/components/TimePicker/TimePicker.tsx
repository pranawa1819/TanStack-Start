'use client'

import * as React from 'react'
import { Field, FieldLabel } from '~/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '~/ui/input-group'
import { Popover, PopoverContent, PopoverTrigger } from '~/ui/popover'
import { ClockIcon } from 'lucide-react'
import { HRLabel } from '../Label/Label'

interface HRTimePickerProps {
  time?: string
  onTimeChange?: (time: string) => void
  Label?: string
  isRequired?: boolean
  error?: string
  disabled?: boolean
  placeholder?: string
  className?: string
}

function formatTime(time?: string) {
  if (!time) return ''
  return time
}

export const HRTimePicker = ({
  time,
  onTimeChange,
  Label,
  isRequired,
  error,
  disabled,
  placeholder,
  className,
}: HRTimePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(time)
  const [inputValue, setInputValue] = React.useState(formatTime(time))

  const handleTimeChange = (value: string) => {
    setSelectedTime(value)
    setInputValue(value)
    onTimeChange?.(value)
    setOpen(false)
  }

  return (
    <Field className="flex flex-col gap-1">
      {Label && (
        <div className="flex gap-1">
          <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">{Label}</HRLabel>
          {isRequired && <span className="text-red-500">*</span>}
        </div>
      )}

      <InputGroup className={className}>
        <InputGroupInput
          type="time"
          step="1"
          value={inputValue}
          placeholder={placeholder || 'Select time'}
          disabled={disabled}
          onChange={(e) => handleTimeChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
      </InputGroup>
      {error && <div className="text-red-500 text-[12px]">{error}</div>}
    </Field>
  )
}