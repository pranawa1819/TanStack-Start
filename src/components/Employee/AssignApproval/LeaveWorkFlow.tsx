import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { HRCard } from '~/components/Card/Card'
import {
  addDepartmentSchema,
  type AddDepartmentFormValue,
} from '~/components/CompanySetup/AddDepartmentForm.Zod'
import { Delete } from '~/components/Icon/Delete'
import { HRInput } from '~/components/Input/Input'
import { HRSelect } from '~/components/Select/Select'
import { Button } from '~/ui/button'

export const LeaveWorkFlow = () => {
  const { control } = useForm<AddDepartmentFormValue>({
    resolver: zodResolver(addDepartmentSchema),
    mode: 'onChange',
  })

  const depStatus = [
    {
      id: 0,
      value: 'Active',
      content: 'Active',
    },
    {
      id: 2,
      content: 'Inactive',
      value: 'Inactive',
    },
  ]
  const data = [
    {
      id: 1,
      stage: 'New Step',
      approver: 'Sameer Thapa',
    },
    {
      id: 2,
      approver: 'Inactive',
      stage: 'Sameer Thapa',
    },
  ]
  return (
    <>
      {data.map((val, index) => {
        const isLast = index === data.length - 1
        return (
          <div className="relative flex gap-6" key={index}>
            <div className=" h-9 rounded-sm border-2 border-[#E4E4E7] py-1 px-3 text-[#312C85] text-[16px] font-normal leading-6">
              {val.id}
            </div>
            <div
              className={`absolute left-4 top-9 border-l border-[#E4E4E7] `}
              style={{
                height: isLast ? '50%' : '90%',
              }}
            ></div>
            <HRCard
              cardClassName="w-full  p-6  border border-[#E4E4E7] rounded-xl shadow-none"
              cardContnetClassName="p-0 flex flex-col gap-6"
            >
              <div className="flex gap-6 items-center">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <HRInput
                    Label="Stage Description"
                    type="text"
                    placeholder={val.stage}
                    inputClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  />
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <HRSelect
                        Label="Authorized Approver"
                        triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                        selectData={depStatus}
                        placeholder={val.approver}
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={false}
                      />
                    )}
                  />
                </div>
                <div>
                  <Button
                    type="button"
                    className="rounded-sm p-1.5 w-8 h-8 bg-[#F4F4F5]"
                  >
                    <Delete fill="gray" />
                  </Button>
                </div>
              </div>
            </HRCard>
          </div>
        )
      })}
    </>
  )
}
