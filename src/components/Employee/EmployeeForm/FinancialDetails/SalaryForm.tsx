import { useFormContext } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'

export const SalaryForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-6">
      <div className="text-[16px] font-semibold leading-6">
        SALARY
      </div>

      <div className="grid grid-cols-2 gap-4">
        <HRInput
          Label="Gross Salary"
          type="text"
          isRequired
          placeholder="Gross Salary"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.grossSalary?.message as string}
          {...register('grossSalary')}
        />

        <HRInput
          Label="Basic Salary"
          type="text"
          isRequired
          placeholder="Basic Salary"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.basicSalary?.message as string}
          {...register('basicSalary')}
        />
      </div>
    </div>
  )
}
