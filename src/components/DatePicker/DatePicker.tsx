'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { type DateRange } from 'react-day-picker'
import { Button } from '~/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '~/ui/popover'
import { Field } from '~/ui/field'
import { Calendar } from '~/ui/calendar'
import { LuCalendarDays } from 'react-icons/lu'

interface DatePickerProps {
  className?: string
  placeHolderClassName?: string
  value?: DateRange
  onChange?: (date: DateRange | undefined) => void
  defaultMonth?: Date
  numberOfMonths?: number
  placeholder?: string
}

export function DatePicker({
  className,
  placeHolderClassName,
  value,
  onChange,
  defaultMonth,
  numberOfMonths = 2,
  placeholder = 'Pick a date',
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(
    value || undefined,
  )

  const selectedDate = value ?? internalDate

  const handleSelect = (date: DateRange | undefined) => {
    setInternalDate(date)
    onChange?.(date)
  }

  return (
    <Field className="w-60">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`px-2.5 font-normal border border-[#E4E4E7] bg-[#FFF] rounded-[6px] ${className}`}
          >
            <LuCalendarDays className="h-4 w-4 text-[#71717A]" />
            {selectedDate?.from ? (
              selectedDate.to ? (
                <>
                  {format(selectedDate.from, 'LLL dd, y')} -{' '}
                  {format(selectedDate.to, 'LLL dd, y')}
                </>
              ) : (
                format(selectedDate.from, 'LLL dd, y')
              )
            ) : (
              <span className={placeHolderClassName}>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="range"
            defaultMonth={defaultMonth ?? selectedDate?.from}
            selected={selectedDate}
            onSelect={handleSelect}
            numberOfMonths={numberOfMonths}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
