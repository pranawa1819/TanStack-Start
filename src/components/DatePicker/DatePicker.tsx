"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"
import { Button } from "~/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/ui/popover"
import { Field} from "~/ui/field"
import { Calendar } from "~/ui/calendar"

interface DatePickerProps {
  value?: DateRange
  onChange?: (date: DateRange | undefined) => void
  defaultMonth?: Date
  numberOfMonths?: number
  placeholder?: string
  className:string
}

export function DatePicker({
  value,
  onChange,
  defaultMonth,
  className,
  numberOfMonths = 2,
  placeholder,
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(
    value || undefined
  )

  const selectedDate = value ?? internalDate

  const handleSelect = (date: DateRange | undefined) => {
    setInternalDate(date)
    onChange?.(date)
  }

  return (
    <Field className="w-60">
      <Popover>
        <PopoverTrigger asChild className={className}>
          <Button
            variant="outline"
            className="px-2.5 font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate?.from ? (
              selectedDate.to ? (
                <>
                  {format(selectedDate.from, "LLL dd, y")} -{" "}
                  {format(selectedDate.to, "LLL dd, y")}
                </>
              ) : (
                format(selectedDate.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder}</span>
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