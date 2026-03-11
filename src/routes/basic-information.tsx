import {
  basicInformationSchema,
  type BasicInformationFormValue,
} from '~/components/BasicInformation/BasicInformationForm.Zod'
import { createFileRoute } from '@tanstack/react-router'
import { Controller, useForm, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HRInput } from '~/components/Input/Input'
import { FaRegSave } from 'react-icons/fa'
import { HRSelect } from '~/components/Select/Select'
import {
  countryOptions,
  currencyOptions,
  districtOptions,
  natureOfOrganizationOptions,
  provinceOptions,
} from '~/components/BasicInformation/FormData'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'


type BreadcrumbSearch = {
  group?: string
  label?: string
  url?: string
  icon?: any
  groupIcon?: any
}

export const Route = createFileRoute('/basic-information')({
    validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
  component: BasicInformation,
})

function BasicInformation() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BasicInformationFormValue>({
    resolver: zodResolver(basicInformationSchema),
    mode: 'onChange',
    defaultValues: {
      natureOfOrganization: '',
      currency: '',
      country: '',
      province: '',
      district: '',
    },
  })

  const onsubmit = (data: BasicInformationFormValue) => {
    console.log('Submitted Form Data: ', data)
  }
  
  const search = Route.useSearch();
  return (
    <>
      <div className="w-full flex flex-col">
        <BreadCrumb title={search.label ?? ''} group={search.group??''}/>
        <div className="px-12 py-6 text-[20px] font-semibold leading-12 text-[#09090B] ">
          Company Profile
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col gap-1.5">
            <div className="px-6 ">
              <div className="flex flex-col gap-6 h-[688px] overflow-auto p-6 border rounded-t-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="flex flex-col">
                  <div className="text-[18px] text-[#09090B] font-medium leading-12">
                    Basic Information
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <HRInput
                      Label="Organization Legal Name"
                      isRequired={true}
                      subLabel="legal name is used in invoices and external documents"
                      type="text"
                      placeholder="Global Square IT Company"
                      error={errors.organizationLegalName?.message}
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      {...register('organizationLegalName')}
                    />
                    <HRInput
                      Label="Organization Short Name"
                      isRequired={true}
                      subLabel="short name is used in software except in external documents"
                      type="text"
                      placeholder="Global Square"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.organizationShortName?.message}
                      {...register('organizationShortName')}
                    />

                    <HRInput
                      Label="Organization  Code"
                      type="text"
                      placeholder="e.g. RG for Rigo Technologies (2 to 4 digits)"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      {...register('organizationCode')}
                    />
                    <HRInput
                      Label="Organization  voucher code"
                      type="text"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      {...register('organizationVoucherCode')}
                    />

                    <Controller
                      name="natureOfOrganization"
                      control={control}
                      render={({ field }) => (
                        <HRSelect
                          Label="Nature of Organization"
                          isRequired
                          triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                          selectData={natureOfOrganizationOptions}
                          placeholder="Select nature of organization"
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                          error={errors.natureOfOrganization?.message}
                        />
                      )}
                    />

                    <Controller
                      name="currency"
                      control={control}
                      render={({ field }) => (
                        <HRSelect
                          Label="Currency"
                          isRequired={true}
                          triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                          placeholder="select currency"
                          value={field.value}
                          onValueChange={field.onChange}
                          selectData={currencyOptions}
                          error={errors.currency?.message}
                        />
                      )}
                    />

                    <HRInput
                      Label="PAN or VAT Number"
                      isRequired={true}
                      type="text"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.panNumber?.message}
                      {...register('panNumber')}
                    />

                    <HRInput
                      Label="Registration Number"
                      isRequired={true}
                      type="text"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.registrationNumber?.message}
                      {...register('registrationNumber')}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] text-[#09090B] font-medium leading-12">
                    Address
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <HRSelect
                          Label="Country"
                          isRequired={true}
                          triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                          placeholder="select country"
                          selectData={countryOptions}
                          value={field.value}
                          onValueChange={field.onChange}
                          error={errors.country?.message}
                        />
                      )}
                    />
                    <Controller
                      name="province"
                      control={control}
                      render={({ field }) => (
                        <HRSelect
                          Label="Province"
                          isRequired={true}
                          triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                          placeholder="select province"
                          selectData={provinceOptions}
                          value={field.value}
                          onValueChange={field.onChange}
                          error={errors.province?.message}
                        />
                      )}
                    />
                    <Controller
                      name="district"
                      control={control}
                      render={({ field }) => (
                        <HRSelect
                          Label="District"
                          isRequired={true}
                          triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                          placeholder="select district"
                          selectData={districtOptions}
                          value={field.value}
                          onValueChange={field.onChange}
                          error={errors.district?.message}
                        />
                      )}
                    />
                    <HRInput
                      Label="City"
                      isRequired={true}
                      type="text"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.city?.message}
                      {...register('city')}
                    />
                    <HRInput
                      Label="Phone Number"
                      isRequired={true}
                      type="text"
                      max={10}
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.phoneNumber?.message}
                      {...register('phoneNumber')}
                    />
                    <HRInput
                      Label="Email"
                      isRequired={true}
                      type="text"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.email?.message}
                      {...register('email')}
                    />

                    <HRInput
                      Label="Website"
                      isRequired={true}
                      type="text"
                      inputClassName="px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7]"
                      error={errors.website?.message}
                      {...register('website')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 z-10 bg-white  p-6 rounded-b-xl border-t border-[#E4E4E7] flex justify-end gap-6">
              <button
                type="button"
                className="p-6  rounded-xl text-[14px] font-medium leading-5 text-[#09090B] border broder-[#E4E4E7]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex gap-2 px-4 py-2 bg-[#4F39F6] rounded-xl text-[14px] font-medium leading-5 text-white items-center"
              >
                <FaRegSave />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
