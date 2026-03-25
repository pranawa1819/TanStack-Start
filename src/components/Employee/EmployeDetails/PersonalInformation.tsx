import { Button } from '~/ui/button'
import { FiEdit } from 'react-icons/fi'
import { PersonalDetailDisplay } from './PersonalInformation/PersonalDetailDisplay'
import { useState } from 'react'
import { FaRegSave } from 'react-icons/fa'
import { PersonalDetailEditForm } from './PersonalInformation/PersonalDetailEditForm'
import { EmergencyDetailDisplay } from './PersonalInformation/EmergencyDetailDisplay'
import { EmergencyDetailEditForm } from './PersonalInformation/EmergencyDetailEditForm'

export const PersonalInformation = ({ employeeId }: { employeeId: string }) => {
  const [edit, setEdit] = useState(false)
  const [editEmergency, setEditEmergency] = useState(false)

  // const { data: employee } = useGetEmployeeById(employeeId)
  return (
    <>
      <div className="flex flex-col gap-6 max-h-115 overflow-auto pr-3">
        <div className="text-[18px] font-medium leading-7 text-[#09090B]">
          Persona Information
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-[16px] font-medium leading-6 text-[#09090B]">
              Personal Details
            </div>
            {edit ? (
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="text-[14px] font-medium leading-5  text-[#A6A6A6]  "
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  className="flex gap-2  text-[14px] font-medium leading-5 text-white items-center"
                  form="personal"
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
                onClick={() => setEdit(true)}
              >
                <FiEdit className="text-[16px] text-black" />
                Edit Details
              </Button>
            )}
          </div>
          {edit ? (
            <PersonalDetailEditForm />
          ) : (
            <PersonalDetailDisplay employeeId={employeeId} />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-[16px] font-medium leading-6 text-[#09090B]">
              Emergency Contact
            </div>
            {editEmergency ? (
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="text-[14px] font-medium leading-5  text-[#A6A6A6] "
                  onClick={() => setEditEmergency(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  className="flex gap-2  text-[14px] font-medium leading-5 text-white items-center"
                  form="emergency"
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
                onClick={() => setEditEmergency(true)}
              >
                <FiEdit className="text-[16px] text-black" />
                Edit Details
              </Button>
            )}
          </div>
          {editEmergency ? (
            <EmergencyDetailEditForm />
          ) : (
            <EmergencyDetailDisplay employeeId={employeeId} />
          )}
        </div>
      </div>
    </>
  )
}
