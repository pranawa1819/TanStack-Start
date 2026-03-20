import { Button } from '~/ui/button'
import { FiEdit } from 'react-icons/fi'
import { useState } from 'react'
import { FaRegSave } from 'react-icons/fa'
import { EmployeeDetailDisplay } from './WorkInformation/EmployeeDetailDisplay'
import { EmployeeDetailEditForm } from './WorkInformation/EmployeeDetailEditForm'
import { FinancialDetailEditForm } from './WorkInformation/FinancialDetailEditForm'
import { FinancialDetailDisplay } from './WorkInformation/FinancialDetailDisplay'

export const WorkInformation = ({ employeeId }: { employeeId: string }) => {
  const [editEmployee, setEditEmployee] = useState(false)
  const [editFinance, setEditFinance] = useState(false)

  // const { data: employee } = useGetEmployeeById(employeeId)
  return (
    <>
      <div className="flex flex-col gap-6 max-h-115 overflow-auto pr-3">
        <div className="text-[18px] font-medium leading-7 text-[#09090B]">
          Work Information
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-[16px] font-medium leading-6 text-[#09090B]">
              Employee Details
            </div>
            {editEmployee ? (
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="text-[14px] font-medium leading-5  text-[#A6A6A6]  "
                  onClick={() => setEditEmployee(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  className="flex gap-2  text-[14px] font-medium leading-5 text-white items-center"
                  form="employee"
                >
                  <FaRegSave />
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                variant="default"
                className="flex gap-2 text-[14px] font-medium leading-5 text-black items-center has-[>svg]:px-4 h-10"
                onClick={() => setEditEmployee(true)}
              >
                <FiEdit className="text-[16px] text-black" />
                Edit Details
              </Button>
            )}
          </div>
          {editEmployee ? (
            <EmployeeDetailEditForm />
          ) : (
            <EmployeeDetailDisplay employeeId={employeeId} />
          )}
        </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-[16px] font-medium leading-6 text-[#09090B]">
            Financial Details
          </div>
          {editFinance ? (
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="text-[14px] font-medium leading-5  text-[#A6A6A6] "
                onClick={() => setEditFinance(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="secondary"
                className="flex gap-2  text-[14px] font-medium leading-5 text-white items-center"
                form="financialData"

              >
                <FaRegSave />
                Save Changes
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              variant="default"
              className="flex gap-2 text-[14px] font-medium leading-5 text-black items-center has-[>svg]:px-4 h-10"
              onClick={() => setEditFinance(true)}
            >
              <FiEdit className="text-[16px] text-black" />
              Edit Details
            </Button>
          )}
        </div>
        {editFinance ? (
          <FinancialDetailEditForm />
        ) : (
          <FinancialDetailDisplay employeeId={employeeId} />
        )}
      </div>
      </div>
    </>
  )
}
