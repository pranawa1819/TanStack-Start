import { useFormContext } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'

export const ContactInformationForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-6">
      <div className="text-[16px] font-semibold leading-6">
        CONTACT INFORMATION
      </div>

      <div className="grid grid-cols-2 gap-4">
        <HRInput
          Label="Work Phone Number"
          type="text"
          placeholder="XXX-XXXXXXX"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.workPhoneNumber?.message as string}
          {...register('workPhoneNumber')}
        />

        <HRInput
          Label="Work Email"
          type="email"
          isRequired
          placeholder="Work Email"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.workEmail?.message as string}
          {...register('workEmail')}
        />
      </div>
    </div>
  )
}
