import {  useFormContext } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'

export const EmergencyForm = () => {

  const {
    register,
    formState: { errors },
  } = useFormContext()
  console.log(errors)

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="text-[16px] font-semibold leading-6 ">
            EMERGENCY CONTACT
          </div>
          <div className="flex flex-col gap-4">
            
            <div className="grid grid-cols-2 gap-4">
              <HRInput
                Label="Emergency Contact"
                isRequired={true}
                type="text"
                placeholder="XXX-XXXXXXX"
                maxLength={10}
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.emergencyContact?.message as string}
                {...register('emergencyContact')}
              />
              <HRInput
                Label="Emergency Contact Name"
                isRequired={true}
                type="text"
                placeholder="Emergency Contact Name"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.emergencyContactName?.message as string}
                {...register('emergencyContactName')}
              />
              <HRInput
                Label="Emergency Contact Relation"
                isRequired={true}
                type="text"
                placeholder="Emergency Contact Relation"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.emergencyContactRelation?.message as string}
                {...register('emergencyContactRelation')}
              />
            </div>

            
            
          </div>
        </div>
      </div>
    </>
  )
}
