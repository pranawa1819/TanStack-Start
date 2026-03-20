import { useForm, type Resolver } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Employee } from '../../Schema/EmployeeTableData'
import { personalInformationSchema, type PersonalInfromationFormValue } from './PersonalInfromationZod'

type Props = {
  employee:Employee;
  employeeId: string;
}
export const PersonalDetailEditForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfromationFormValue>({
    resolver: zodResolver(personalInformationSchema) as Resolver<PersonalInfromationFormValue>,
    mode: 'onChange',
  })
  console.log(errors)
    const onsubmit = (data: PersonalInfromationFormValue) => {
      console.log('Submitted Form Data: ', data)
    }
  return (
    <>
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onsubmit)} id="personal">
          <div className="grid grid-cols-5 gap-4">
            <HRInput
              Label="First Name"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.firstName?.message as string}
              {...register('firstName')}
            />
            <HRInput
              Label="Middle Name"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.middleName?.message as string}
              {...register('middleName')}
            />
            <HRInput
              Label="Last Name"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.lastName?.message as string}
              {...register('lastName')}
            />

            <HRInput
              Label="Personal Email"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.email?.message as string}
              {...register('email')}
            />
            <HRInput
              Label="Contact"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.phoneNumber?.message as string}
              {...register('phoneNumber')}
            />
            <HRInput
              Label="Country"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.country?.message as string}
              {...register('country')}
            />
            <HRInput
              Label="Province"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.province?.message as string}
              {...register('province')}
            />
            <HRInput
              Label="City"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.city?.message as string}
              {...register('city')}
            />
            <HRInput
              Label="Municipality/VDC"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.municipality?.message as string}
              {...register('municipality')}
            />
            <HRInput
              Label="Ward"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.ward?.message as string}
              {...register('ward')}
            />
            <HRInput
              Label="Date of Birth"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="date"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.dateOfBirth?.message as string}
              {...register('dateOfBirth')}
            />
            <HRInput
              Label="Gender"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.gender?.message as string}
              {...register('gender')}
            />
            <HRInput
              Label="Marital Status"
              labelClassName="text-[12px] font-medium leading-4 text-[#71717A]"
              type="text"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
              error={errors.maritalStatus?.message as string}
              {...register('maritalStatus')}
            />
          </div>
          </form>
        </div>
    </>
  )
}
