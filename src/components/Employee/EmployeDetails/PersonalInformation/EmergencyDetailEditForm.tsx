import { useForm, type Resolver } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Employee } from '../../Schema/EmployeeTableData'
import { emergencySchema, type EmergencyFormValue } from './EmergencyDetailZod'

type Props = {
  employee:Employee;
  employeeId: string;
}
export const EmergencyDetailEditForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmergencyFormValue>({
    resolver: zodResolver(emergencySchema) as Resolver<EmergencyFormValue>,
    mode: 'onChange',
  })
    const onsubmit = (data: EmergencyFormValue) => {
      console.log('Submitted Form Data: ', data)
    }
  return (
    <>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onsubmit)} id="emergency">
          <div className="grid grid-cols-5 gap-4">
            <HRInput
              Label="Emergency Contact"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.emergencyContact?.message as string}
              {...register('emergencyContact')}
            />
            <HRInput
              Label="Emergency Contact Name"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.emergencyContactName?.message as string}
              {...register('emergencyContactName')}
            />
            <HRInput
              Label="Emergency Contact Relation"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.emergencyContactRelation?.message as string}
              {...register('emergencyContactRelation')}
            />

          </div>
          </form>
        </div>
    </>
  )
}
