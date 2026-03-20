import { Controller, useFormContext } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'
import { HRSelect } from '~/components/Select/Select'
import { branchData, departmentData, jobLevelData, reportingManagerData } from '../Schema/WorkData'

export const WorkOrganizationForm = () => {


  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()


  return (
    <div className="flex flex-col gap-6">
      <div className="text-[16px] font-semibold leading-6">
        EMPLOYEE & ORGANIZATION DETAILS
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="branch"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Branch"
              isRequired
              selectData={branchData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select branch"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.branch?.message as string}
              disabled={false}
            />
          )}
        />

        <Controller
          name="department"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Department"
              isRequired
              selectData={departmentData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select department"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.department?.message as string}
              disabled={false}
            />
          )}
        />
        <HRInput
          Label="Employee ID"
          type="text"
          isRequired
          placeholder="Employee ID"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.employeeId?.message as string}
          {...register('employeeId')}
        />

        <HRInput
          Label="Designation"
          type="text"
          isRequired
          placeholder="Designation"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.designation?.message as string}
          {...register('designation')}
        />
        <Controller
          name="jobLevel"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Job Level"
              isRequired={true}
              selectData={jobLevelData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select jobLevel"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.jobLevel?.message as string}
              disabled={false}
            />
          )}
        />

        <Controller
          name="reportingManager"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Reporting Manager"
              isRequired
              selectData={reportingManagerData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select Reporting Manager"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.reportingManager?.message as string}
              disabled={false}
            />
          )}
        />


      </div>
    </div>
  )
}
