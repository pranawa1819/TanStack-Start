import { Controller, useFormContext } from 'react-hook-form'
import { FileUpload } from '~/components/Dashboard/CreateAnnouncement/FileUpload'
import { HRInput } from '~/components/Input/Input'
import { HRLabel } from '~/components/Label/Label'

export const PersonalInformationForm = () => {
  const genderList = [
    {
      gender: 'Male',
    },
    {
      gender: 'Female',
    },
    {
      gender: 'Others',
    },
  ]

  const marriageList = [
    {
      maritalStatus: 'Married',
    },
    {
      maritalStatus: 'Single',
    },
    {
      maritalStatus: 'Divorced',
    },
    {
      maritalStatus: 'Widowed',
    },
  ]
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="text-[16px] font-semibold leading-6 ">
            PERSONAL INFORMATION
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <span>Profile Picture</span>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <FileUpload
                    className="w-41 h-41 border border-[#F7F7F7] bg-[#F7F7F7] rounded-[400px] flex flex-col justify-center items-center"
                    label="Drag and drop"
                    subLable=""
                    buttonClassName="text-black"
                    browseText="Add Image"
                    drag
                    onChange={(file) => field.onChange(file)}
                  />
                )}
              />
              <span>Accepts JPG, PNG, JPEG under 5MB.</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <HRInput
                Label="First Name"
                isRequired={true}
                type="text"
                placeholder="First Name"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.firstName?.message as string}
                {...register('firstName')}
              />
              <HRInput
                Label="Middle Name"
                isRequired={true}
                type="text"
                placeholder="Middle Name"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.middleName?.message as string}
                {...register('middleName')}
              />
              <HRInput
                Label="Last Name"
                isRequired={true}
                type="text"
                placeholder="Last Name"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.lastName?.message as string}
                {...register('lastName')}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <HRInput
                Label="Personal Email"
                isRequired={true}
                type="text"
                placeholder="Personal Email"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.email?.message as string}
                {...register('email')}
              />
              <HRInput
                Label="Phone Number"
                isRequired={true}
                type="text"
                placeholder="XXX-XXXXXXX"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.phoneNumber?.message as string}
                {...register('phoneNumber')}
              />
              <HRInput
                Label="Date of Birth"
                isRequired={true}
                type="date"
                inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
                error={errors.dateOfBirth?.message as string}
                {...register('dateOfBirth')}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">
                  Gender
                </HRLabel>
                <div className="flex gap-1.5">
                  {genderList.map((val, items) => (
                    <HRLabel
                      labelClassName="text-[14px] text-[#09090B] font-medium leading-5"
                      key={items}
                    >
                      <HRInput
                        type="radio"
                        value={val.gender}
                        {...register('gender')}
                        error={errors.gender?.message as string}
                        className="border-[#A1A1AA]"
                      />
                      <span>{val.gender}</span>
                    </HRLabel>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">
                  Marital Status
                </HRLabel>
                <div className="flex gap-1.5">
                  {marriageList.map((val, items) => (
                    <HRLabel
                      labelClassName="text-[14px] text-[#09090B] font-medium leading-5"
                      key={items}
                    >
                      <HRInput
                        type="radio"
                        value={val.maritalStatus}
                        {...register('maritalStatus')}
                        error={errors.maritalStatus?.message as string}
                        className="border-[#A1A1AA]"
                      />
                      <span>{val.maritalStatus}</span>
                    </HRLabel>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
