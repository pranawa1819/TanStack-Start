import { Controller, useFormContext } from 'react-hook-form'
import { HRSelect } from '~/components/Select/Select'
import { employeeTypeData, shiftData, workTypeData } from '../Schema/WorkData'

export const WorkScheduleTypeForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-6">
      <div className="text-[16px] font-semibold leading-6">
        WORK SCHEDULE & TYPE
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="shift"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Shift"
              isRequired
              selectData={shiftData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select shift"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.shift?.message as string}
              disabled={false}
            />
          )}
        />

        <Controller
          name="workType"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Work Type"
              isRequired
              selectData={workTypeData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select work type"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.workType?.message as string}
              disabled={false}
            />
          )}
        />

        <Controller
          name="employeeType"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Employee Type"
              isRequired={true}
              selectData={employeeTypeData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select employee type"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.employeeType?.message as string}
              disabled={false}
            />
          )}
        />
      </div>
    </div>
  )
}
