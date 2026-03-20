import { useFormContext } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'

export const BankDetailForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-6">
      <div className="text-[16px] font-semibold leading-6">SALARY</div>

      <div className="grid grid-cols-2 gap-4">
        <HRInput
          Label="Bank Name"
          type="text"
          isRequired
          placeholder="Bank Name"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.bankName?.message as string}
          {...register('bankName')}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <HRInput
          Label="Bank Account Number"
          type="text"
          isRequired
          placeholder="Bank Account Number"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.bankAccountNumber?.message as string}
          {...register('bankAccountNumber')}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <HRInput
          Label="Bank Account Name"
          type="text"
          isRequired
          placeholder="Bank Account Name"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.bankAccountName?.message as string}
          {...register('bankAccountName')}
        />
      </div>
    </div>
  )
}
