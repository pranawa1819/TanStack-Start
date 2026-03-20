import { useState } from 'react'
import { HRInput } from '../Input/Input'
import { Search } from 'lucide-react'
import { List } from '../Icon/List'
import { Grid } from '../Icon/Grid'
import { Dialog } from '../Dialog/Dialog'
import { EmployeeCard } from './EmployeeCard'
import { EmployeeTable } from './EmployeeTable'
import { EmployeeForm } from './EmployeeForm/EmployeeForm'

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
            <div className="border rounded-[6px] px-4 py-2.5 border-[#E4E4E7] bg-white leading-4 text-[14px font-normal">
              Branch
            </div>
            <div className="flex items-center ">
              <button
                onClick={() => setEmployee('card')}
                className={`p-3 border border-[#4F39F6] cursor-pointer rounded-l-xl ${
                  employee === 'card' ? 'bg-white' : 'bg-[#4F39F6]'
                }`}
              >
                <List fill={`${employee === 'card' ? 'black' : 'white'}`} />
              </button>

              <button
                onClick={() => setEmployee('table')}
                className={`p-3 border border-[#4F39F6] cursor-pointer rounded-r-xl  ${
                  employee === 'table' ? 'bg-white ' : 'bg-[#4F39F6]'
                }`}
              >
                <Grid fill={`${employee === 'table' ? 'black' : 'white'}`} />
              </button>
            </div>

            <Dialog
              open={open}
              onOpenChange={setOpen}
              triggerContent={
                <button
                  type="button"
                  className="text-center px-4 py-2.5 bg-[#4F39F6] rounded-xl text-[14px] font-medium leading-5 text-white"
                >
                  Add Employee
                </button>
              }
              className="max-w-screen p-4 bg-[#F9FAFB] sm:max-w-186.75 "
            >
              <EmployeeForm setOpen={setOpen} />
            </Dialog>
          </div>
        </div>

        {employee === 'card' ? <EmployeeCard /> : <EmployeeTable />}
      </div>
    </>
  )
}
