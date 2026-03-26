import { Search } from 'lucide-react'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { DatePicker } from '~/components/DatePicker/DatePicker'
import { ActionDropdown } from '~/components/DropDown/ActionDropDown'
import { HRInput } from '~/components/Input/Input'


interface AttendanceRecordProps {
  isBranch: boolean
  isShift:boolean
  isSearch: boolean
  isDatePicker: boolean
  isEmployeeType:boolean
}
export const AttendanceRecord = ({isBranch,isDatePicker,isSearch,isShift,isEmployeeType}:AttendanceRecordProps) => {
  const [searchData, setSearchData] = useState('')

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 justify-end">
          {isSearch&& (
            <div className="relative flex-1 w-58">
              <HRInput
                type="text"
                value={searchData}
                onChange={(e) => {
                  setSearchData(e.target.value)
                }}
                placeholder="Search.."
                className="border rounded-[6px] px-11 pr-4 py-2.5 border-[#E4E4E7] bg-white leading-5"
              />
              <Search
                className="rounded-3xl absolute left-5 top-2.5"
                size={16}
                color="black"
              />
            </div>
            )}
            <div className="flex gap-4">
              {isBranch && (
              <ActionDropdown
                trigger={
                  <div className="flex gap-2 items-center border rounded-[6px] px-4 py-2 border-[#E4E4E7] bg-white text-[14px] font-normal">
                    <span>Branch</span>
                    <LuChevronDown className="text-[20px]" />
                  </div>
                }
                actions={[
                  {
                    label: 'All',
                  },
                  {
                    label: 'Block',
                  },
                  {
                    label: 'Delete',
                    className: 'text-red-600',
                  },
                ]}
              />
              )}
              {isShift &&(
              <ActionDropdown
                trigger={
                  <div className="flex gap-2 items-center border rounded-[6px] px-4 py-2 border-[#E4E4E7] bg-white text-[14px] font-normal">
                    <span>Shift</span>
                    <LuChevronDown className="text-[20px]" />
                  </div>
                }
                actions={[
                  {
                    label: 'All',
                  },
                  {
                    label: 'Block',
                  },
                  {
                    label: 'Delete',
                    className: 'text-red-600',
                  },
                ]}
              />
              )}
                {isEmployeeType &&(
              <ActionDropdown
                trigger={
                  <div className="flex gap-2 items-center border rounded-[6px] px-4 py-2 border-[#E4E4E7] bg-white text-[14px] font-normal">
                    <span>Employee Type</span>
                    <LuChevronDown className="text-[20px]" />
                  </div>
                }
                actions={[
                  {
                    label: 'All',
                  },
                  {
                    label: 'Block',
                  },
                  {
                    label: 'Delete',
                    className: 'text-red-600',
                  },
                ]}
              />
              )}
              {isDatePicker &&(
              <DatePicker
                placeholder="Jan 20, 2023 - Feb 09, 2023"
                className="px-4 py-2.5 border-[#E4E4E7] rounded-[6px]"
              />
              )}
            </div>
          </div>
      </div>
    </>
  )
}
