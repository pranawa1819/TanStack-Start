import {
  basicInformationSchema,
  type BasicInformationFormValue,
} from '~/components/CompanySetup/BasicInformationForm.Zod'
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
} from '~/components/CompanySetup/FormData'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import { HRCard } from '~/components/Card/Card'
import { Button } from '~/ui/button'

export type BreadcrumbSearch = {
  group?: string
  label?: string
  url?: string
  icon?: any
  groupIcon?: any
}

export const Route = createFileRoute('/companysetup/')({
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

  const search = Route.useSearch()
  return (
    <>
      <div className="w-full h-[calc(100vh-84px)] overflow-auto flex flex-col bg-[#F9FAFB]">
        <BreadCrumb
          className="px-12 pt-6.5"
          crumbListClassName="gap-2"
          crumbItemClassName="text-[14px] font-normal leading-5 gap-2 text-[#71717A]"
          title={search.label ?? ''}
          group={search.group ?? ''}
        />
        <div className="px-12 py-6 text-[20px] font-semibold leading-12 text-[#09090B] ">
          Company Profile
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col gap-1">
            <div className="px-6 ">
              <HRCard
                cardClassName="h-[500px] lg:h-[700px] overflow-auto p-6 border-none rounded-t-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
                cardContnetClassName="flex flex-col gap-6 p-0"
              >
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
                          disabled={false}
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
                          disabled={false}
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
                          disabled={false}
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
                          disabled={false}
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
                          disabled={false}
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
              </HRCard>
            </div>
            <div className="sticky bottom-0 top-0 z-10 bg-white  p-6 rounded-b-xl border-t border-[#E4E4E7] flex justify-end gap-6">
              <Button
                type="button"
                variant="outline"
                className="text-[14px] font-medium leading-5 text-[#A6A6A6] "
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant='secondary'
                className="flex gap-2  text-[14px] font-medium leading-5 text-white items-center"
              >
                <FaRegSave />
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
