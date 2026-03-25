import { useState } from 'react'
import { HRInput } from '../Input/Input'
import { Search } from 'lucide-react'
import { List } from '../Icon/List'
import { Grid } from '../Icon/Grid'
import { Dialog } from '../Dialog/Dialog'
import { EmployeeCard } from './EmployeeCard'
import { EmployeeForm } from './EmployeeForm/EmployeeForm'
import { Button } from '~/ui/button'
import { EmployeeTableTest } from './EmployeeTable/Employe-table'
import { LuChevronDown } from 'react-icons/lu'
import { DropDown } from '../DropDown/DropDown'

export const EmployeeManagement = () => {
  const [searchData, setSearchData] = useState('')
  const [open, setOpen] = useState(false)
  const [employee, setEmployee] = useState<'card' | 'table'>('card')
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between px-12 py-6 ">
          <div className="text-[20px] font-semibold leading-12 text-[#09090B] ">
            Employee Management
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative w-58">
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
              <DropDown
                trigger={
                  <div className="flex gap-2 items-center border rounded-[6px] px-4 py-2 border-[#E4E4E7] bg-white leading-4 text-[14px font-normal">
                    <span>Branch</span>
                    <LuChevronDown className="text-[20px]" />
                  </div>
                }
                align="end"
                className="pt-1 pb-0 px-0"
              >
                <div
                  className="w-full flex flex-col   transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    type="button"
                    variant="destructive"
                    className=" text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                  >
                    Edit
                  </Button>

                  <Button
                    type="button"
                    variant="destructive"
                    className=" text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                  >
                    Block
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    className=" rounded-none border-t border-t-[#E4E4E7] text-red-600 cursor-pointer text-[14px] font-normal leading-5"
                  >
                    Delete
                  </Button>
                </div>
              </DropDown>

            <div className="flex items-center ">
              <button
                onClick={() => setEmployee('table')}
                className={`p-2 border border-[#4F39F6] cursor-pointer rounded-l-xl ${
                  employee === 'table' ? 'bg-[#4F39F6]' : ' bg-white'
                }`}
              >
                <List fill={`${employee === 'table' ? 'white' : 'black'}`} />
              </button>

              <button
                onClick={() => setEmployee('card')}
                className={`p-2 border border-[#4F39F6] cursor-pointer rounded-r-xl  ${
                  employee === 'card' ? 'bg-[#4F39F6]' : ' bg-white'
                }`}
              >
                <Grid fill={`${employee === 'card' ? 'white' : 'black'}`} />
              </button>
            </div>

            <Dialog
              open={open}
              onOpenChange={setOpen}
              triggerContent={
                <Button
                  type="button"
                  variant="secondary"
                  className="text-[14px] font-medium leading-5 text-white"
                >
                  Add Employee
                </Button>
              }
              className="max-w-screen p-4 bg-[#F9FAFB] sm:max-w-186.75 "
            >
              <EmployeeForm setOpen={setOpen} />
            </Dialog>
          </div>
        </div>

        {employee === 'card' ? <EmployeeCard /> : <EmployeeTableTest />}
      </div>
    </>
  )
}
