import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { HRInput } from '../Input/Input'
import { HRSelect } from '../Select/Select'
import { HRCard } from '../Card/Card'
import { addBranchSchema, type AddBranchFormValue } from './AddBranchForm.Zod'


export const AddBranchForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddBranchFormValue>({
    resolver: zodResolver(addBranchSchema),
    mode: 'onChange',
  })

  console.log(errors)
  const onsubmit = (data: AddBranchFormValue) => {
    console.log('Save Changes: ', data)
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
    <div className="w-full flex flex-col gap-4">
      <form onSubmit={handleSubmit(onsubmit)} id="branch">
        <HRCard cardClassName="border-none rounded-none p-0 shadow-none" cardContnetClassName='flex flex-col gap-4 p-0'>
          <div className="flex flex-col gap-4">
            <HRInput
              Label="Branch Name"
              type="text"
              placeholder="Baneshwor"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.branchName?.message}
              {...register('branchName')}
            />

            <HRInput
              Label="Branch  ID"
              type="text"
              placeholder="BAN-012"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.branchId?.message}
              {...register('branchId')}
            />

             <HRInput
              Label="Address"
              type="text"
              placeholder="Baneshwor"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.address?.message}
              {...register('address')}
            />

             <HRInput
              Label="Contact Number"
              type="text"
              placeholder="01-40000000"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.contact?.message}
              {...register('contact')}
            />

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <HRSelect
                  Label="Status"
                  triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  selectData={depStatus}
                  placeholder="Status"
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.status?.message}
                  disabled={false}
                />
              )}
            />
          </div>

        </HRCard>
      </form>
    </div>
  )
}
