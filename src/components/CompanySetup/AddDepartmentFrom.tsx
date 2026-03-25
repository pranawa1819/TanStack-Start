import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { HRInput } from '../Input/Input'
import { HRSelect } from '../Select/Select'
import {
  addDepartmentSchema,
  type AddDepartmentFormValue,
} from './AddDepartmentForm.Zod'
import { HRCard } from '../Card/Card'
import { useDialogFormStore } from '../Dialog/form-store'
import { Form } from '../Form/Form'

export const AddDepartmentForm = () => {
  const form = ({} = useForm<AddDepartmentFormValue>({
    resolver: zodResolver(addDepartmentSchema),
    mode: 'onChange',
  }))

  const {
    register,
    control,
    formState: { errors },
  } = form

  const closeDialog = useDialogFormStore((state) => state.onClose)

  const onsubmit = (data: AddDepartmentFormValue) => {
    console.log('Save Changes: ', data)
    closeDialog()
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
    <div className=" w-full flex flex-col gap-4">
      <Form form={form} onSubmit={onsubmit}>
        <HRCard
          cardClassName="border-none rounded-none p-0 "
          cardContnetClassName="flex flex-col gap-4 p-0"
        >
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
        </HRCard>
      </Form>
    </div>
  )
}
