import type { ReactNode } from 'react'
import {
  Select as Root,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/ui/select'
import { HRLabel } from '../Label/Label'

interface SelectDataType {
  id: number
  content: ReactNode
  value: string
}

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  triggerClassName?: string
  placeholder?: string
  itemClassName?: string
  selectData: SelectDataType[]
  isRequired?: boolean
  error?: string | undefined
  Label?: string
  disabled: boolean
}

export const HRSelect = ({
  value,
  onValueChange,
  triggerClassName,
  placeholder,
  itemClassName,
  selectData,
  isRequired,
  error,
  Label,
  disabled
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">
          {Label}
        </HRLabel>
        {isRequired && <span className="text-red-500">*</span>}
      </div>
      <Root value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger className={triggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-background text-foreground">
          <SelectGroup className="bg-background text-foreground">
            {selectData.map((val) => (
              <SelectItem
                key={val.id}
                value={val.value}
                className={`${itemClassName} bg-background text-foreground`}
              >
                {val.content}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Root>
      {error && <div className=" text-red-500">{error}</div>}

    </div>
  )
}
