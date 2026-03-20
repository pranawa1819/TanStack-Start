import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '~/ui/button'
import { HRInput } from '~/components/Input/Input'
import { assignLeaveSchema, type AssignLeaveFormValue } from './AssignLeaveZod'
import { HRLabel } from '~/components/Label/Label'
import { LuInfo } from 'react-icons/lu'

type Props = {
  setOpen: (open: boolean) => void
}

export const AssignLeaveForm = ({ setOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignLeaveFormValue>({
    resolver: zodResolver(assignLeaveSchema),
    mode: 'onChange',
  })

  console.log(errors)
  const onsubmit = (data: AssignLeaveFormValue) => {
    console.log('Save Changes: ', data)
    setOpen(false)
  }

  const leave = [
    {
      type: 'Mourning Leave',
      days: 5,
    },
    {
      type: 'Maternity Leave',
      days: 98,
    },
    {
      type: 'Paternity Leave',
      days: 15,
    },
    {
      type: 'Marriage Leave',
      days: 7,
    },
    {
      type: 'Study Leave',
      days: 14,
    },
    {
      type: 'Bereavement Leave',
      days: 3,
    },
  ]

  return (
    <div className="relative w-full flex flex-col gap-4">
      <div className="absolute -top-2.5 left-5 text-[16px] font-semibold leading-6">
        Assign Leave Type
      </div>
      <div className="mt-9 p-3 bg-[#F4F4F5] rounded-xl flex gap-2 ">
        <div className='w-12 h-12'>
            <img src="/Image.png" alt="profile" className='w-full h-full object-cover rounded-full'/>
        </div>
        <div className='flex flex-col gap-1'>
            <span>John Doe</span>
            <span>EID 012 . Technical</span>

        </div>

      </div>

      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <HRLabel labelClassName="text-[14px] font-medium leading-5 text-[#18181B]">
              Leave Category
            </HRLabel>
            <div className="flex flex-col gap-3 ">
              {leave.map((val, items) => (
                <div>
                  <HRLabel
                    labelClassName="flex justify-between text-[14px] text-[#09090B] font-medium leading-5 border border-[#E4E4E7] rounded-[6px] px-3 py-2.5"
                    key={items}
                  >
                    <div className="flex gap-2 items-center">
                      <HRInput
                        type="radio"
                        value={val.type}
                        {...register('leaveCategory')}
                        error={errors.leaveCategory?.message as string}
                        className="border-[#A1A1AA] shadow-none "
                      />
                      <span className="text-[14px] font-medium leading-5 text-[#18181B]">
                        {val.type}
                      </span>
                    </div>

                    <span className="px-2 py-1 bg-[#F4F4F5] rounded-[400px] text-[12px] font-semibold leading-4 text-[#18181B]">
                      {val.days} Days
                    </span>
                  </HRLabel>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-2 items-center px-3 py-2.5 bg-[#EFF6FF] border border-[#E4E4E7] rounded-[6px]'>
            <div className='p-1'><LuInfo className="text-[24px] text-[#A1A1AA]" /></div>
            <span>
              Entitlement days for these categories are fixed by company policy
              and will be credited to the employee's balance immediately upon
              assignment.
            </span>
          </div>
          <div className="bg-white rounded-b-xl flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className=" text-[14px] font-medium leading-4 text-[#A6A6A6] "
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="secondary"
              className="text-[14px] leading-5 font-medium text-white "
            >
              Assign to Employee
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
