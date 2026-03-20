import { useForm, type Resolver } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Employee } from '../../Schema/EmployeeTableData'
import { financialSchema, type FinancialFormValue } from './FinancialDetailZod'

type Props = {
  employee:Employee;
  employeeId: string;
}
export const FinancialDetailEditForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinancialFormValue>({
    resolver: zodResolver(financialSchema) as Resolver<FinancialFormValue>,
    mode: 'onChange',
  })
    const onsubmit = (data: FinancialFormValue) => {
      console.log('Submitted Form Data: ', data)
    }
  return (
    <>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onsubmit)} id="financialData">
          <div className="grid grid-cols-5 gap-4">
            <HRInput
              Label="Gross Salary"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.grossSalary?.message as string}
              {...register('grossSalary')}
            />
            <HRInput
              Label="Basic Salary"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.basicSalary?.message as string}
              {...register('basicSalary')}
            />
            <HRInput
              Label="Bank Name"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.bankName?.message as string}
              {...register('bankName')}
            />
             <HRInput
              Label="Bank Account Number"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.bankAccountNumber?.message as string}
              {...register('bankAccountNumber')}
            />
             <HRInput
              Label="Bank Account Name"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.bankAccountName?.message as string}
              {...register('bankAccountName')}
            />

          </div>
          </form>
        </div>
    </>
  )
}
