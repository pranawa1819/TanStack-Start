'use client'

import * as React from 'react'
import { Calendar } from '~/ui/calendar'
import { Field, FieldLabel } from '~/ui/field'

import { Popover, PopoverContent, PopoverTrigger } from '~/ui/popover'
import { CalendarIcon } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '~/ui/input-group'
import { HRLabel } from '../Label/Label'

interface HRDatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  Label?: string
  isRequired?: boolean
  error?: string
  disabled?: boolean
  placeholder?: string
  className?: string
}

function formatDate(date: Date | undefined) {
  if (!date) return ''
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export const HRDatePicker = ({
  date,
  onDateChange,
  Label,
  isRequired,
  error,
  disabled,
  placeholder,
  className,
}: HRDatePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date)
  const [month, setMonth] = React.useState<Date | undefined>(date)
  const [inputValue, setInputValue] = React.useState(formatDate(date))

  const handleSelect = (newDate: Date | undefined) => {
    setSelectedDate(newDate)
    setInputValue(formatDate(newDate))
    onDateChange?.(newDate)
    setOpen(false)
  }

  return (
    <Field className={`flex flex-col gap-1`}>
      {Label && (
        <div className="flex gap-1">
          <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">{Label}</HRLabel>
          {isRequired && <span className="text-red-500">*</span>}
        </div>
      )}
      <InputGroup className={className}>
        <InputGroupInput
          value={inputValue}
          placeholder={placeholder || 'Select date'}
          disabled={disabled}
          onChange={(e) => {
            setInputValue(e.target.value)
            const parsedDate = new Date(e.target.value)
            if (!isNaN(parsedDate.getTime())) {
              setSelectedDate(parsedDate)
              setMonth(parsedDate)
              onDateChange?.(parsedDate)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
                disabled={disabled}
              >
                <CalendarIcon />
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                month={month}
                onMonthChange={setMonth}
                onSelect={handleSelect}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      {error && <div className="text-red-500 text-[12px]">{error}</div>}
    </Field>
  )
}
