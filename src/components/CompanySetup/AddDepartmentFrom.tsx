import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { HRInput } from '../Input/Input'
import { HRSelect } from '../Select/Select'
import {
  addDepartmentSchema,
  type AddDepartmentFormValue,
} from './AddDepartmentForm.Zod'
import { Button } from '~/ui/button'

type Props = {
  setOpen: (open: boolean) => void
}

export const AddDepartmentForm = ({ setOpen }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddDepartmentFormValue>({
    resolver: zodResolver(addDepartmentSchema),
    mode: 'onChange',
  })

  console.log(errors)
  const onsubmit = (data: AddDepartmentFormValue) => {
    console.log('Save Changes: ', data)
    setOpen(false)
  }

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

  return (
    <div className="relative w-full flex flex-col gap-4">
      <div className="absolute -top-2.5 left-5 text-[16px] font-semibold leading-6">
        Department Management
      </div>

      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mt-9 flex flex-col gap-4 border rounded-lg border-[#E4E4E7] p-4 ">
          <div className="flex flex-col gap-4">
            <HRInput
              Label="Department Name"
              type="text"
              placeholder="UI/UX"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.departmentName?.message}
              {...register('departmentName')}
            />

            <HRInput
              Label="Department ID"
              type="text"
              placeholder="2001"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.departmentId?.message}
              {...register('departmentId')}
            />

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <HRSelect
                  Label="Status"
                  triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  selectData={depStatus}
                  placeholder="Department"
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.status?.message}
                  disabled={false}
                />
              )}
            />
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
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
