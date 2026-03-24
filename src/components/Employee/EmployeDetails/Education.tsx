import { useState } from 'react'
import { Dialog } from '~/components/Dialog/Dialog'
import { Button } from '~/ui/button'
import { LuPlus } from 'react-icons/lu'
import { AddEducationForm } from './Education/AddEducationForm'
import { educationData } from './Education/EducationData'
import { HRCard } from '~/components/Card/Card'
import { FiEdit } from 'react-icons/fi'
import { Delete } from '~/components/Icon/Delete'

export const Education = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-6 max-h-115 overflow-auto pr-3">
        <div className="flex justify-between items-center">
          <div className="text-[18px] font-medium leading-7 text-[#09090B]">
            Education
          </div>
          <Dialog
            open={open}
            onOpenChange={setOpen}
            triggerContent={
              <Button
                type="button"
                variant="secondary"
                className="flex gap-2 items-center text-[14px] font-medium leading-5"
              >
                <LuPlus className="text-[16px] " />
                Add Education
              </Button>
            }
            className="p-4 "
          >
            <AddEducationForm setOpen={setOpen} />
          </Dialog>
        </div>

        {educationData.map((val, index) => (
          <HRCard
            cardClassName="p-6 border border-[#E4E4E7] rounded-xl shadow-sm"
            cardContnetClassName="p-0 "
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] leading-4 font-semibold text-black">
                  {val.qualification}
                </span>
                <div className='flex flex-col gap-1'>
                <span className="text-[12px] leading-4 font-normal text-[#09090B]">
                  {val.university}
                </span>
                <span className="text-[12px] leading-4 font-normal text-[#71717A]">
                  {val.endYear} - Completed
                </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#F4F4F5] rounded-sm p-1 w-6 h-6">
                  <FiEdit className="text-[16px] font-black" />
                </div>

                <div className="bg-[#FFE2E2] rounded-sm p-1 w-6 h-6">
                  <Delete fill="#E7000B" />
                </div>
              </div>
            </div>
          </HRCard>
        ))}
      </div>
    </>
  )
}
