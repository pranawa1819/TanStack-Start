import { useForm, type Resolver } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Employee } from '../../Schema/EmployeeTableData'
import { employeeDetailsSchema, type EmployeeDetailsFormValue } from './EmployeeDetailsZod'

type Props = {
  employee:Employee;
  employeeId: string;
}
export const EmployeeDetailEditForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeDetailsFormValue>({
    resolver: zodResolver(employeeDetailsSchema) as Resolver<EmployeeDetailsFormValue>,
    mode: 'onChange',
  })
    const onsubmit = (data: EmployeeDetailsFormValue) => {
      console.log('Submitted Form Data: ', data)
    }
  return (
    <>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onsubmit)} id="employee">
          <div className="grid grid-cols-5 gap-4">
            <HRInput
              Label="Employee ID"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.employeeId?.message as string}
              {...register('employeeId')}
            />
            <HRInput
              Label="Branch"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.branch?.message as string}
              {...register('branch')}
            />
            <HRInput
              Label="Department"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.department?.message as string}
              {...register('department')}
            />

            <HRInput
              Label="Job Levell"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.jobLevel?.message as string}
              {...register('jobLevel')}
            />
            <HRInput
              Label="Designation"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.designation?.message as string}
              {...register('designation')}
            />
            <HRInput
              Label="Manager"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.reportingManager?.message as string}
              {...register('reportingManager')}
            />
            <HRInput
              Label="Shift"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.shift?.message as string}
              {...register('shift')}
            />
            <HRInput
              Label="Work Type"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.workType?.message as string}
              {...register('workType')}
            />
            <HRInput
              Label="Employee Type"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.employeeType?.message as string}
              {...register('employeeType')}
            />
            <HRInput
              Label="Work Email"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.workEmail?.message as string}
              {...register('workEmail')}
            />
            
            <HRInput
              Label="Work Phone"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.workPhoneNumber?.message as string}
              {...register('workPhoneNumber')}
            />
            <HRInput
              Label="Joining Date"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="date"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.joiningDate?.message as string}
              {...register('joiningDate')}
            />
            <HRInput
              Label="Contract Start Date"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="date"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.contractStartDate?.message as string}
              {...register('contractStartDate')}
            />
            <HRInput
              Label="Contract End Date"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="date"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.contractEndDate?.message as string}
              {...register('contractEndDate')}
            />
            
          </div>
          </form>
        </div>
    </>
  )
}
