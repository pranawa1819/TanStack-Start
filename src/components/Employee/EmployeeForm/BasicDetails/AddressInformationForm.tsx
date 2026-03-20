import { Controller, useFormContext } from 'react-hook-form'
import { HRInput } from '~/components/Input/Input'
import { HRSelect } from '~/components/Select/Select'
import { useState } from 'react'
import { addressData, municipalityData } from '../Schema/AddressData'

export const AddressInformationForm = () => {
  const [country, setCountry] = useState<string>()
  const [province, setProvince] = useState<string>()
  const [district, setDistrict] = useState<string>()

  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext()

  const handleCountrySelector = (val: string) => {
    setCountry(val)
    setProvince('')
    setDistrict('')
    setValue('country', val)
    setValue('province', '')
    setValue('district', '')
  }

  const handleProvinceSelector = (val: string) => {
    setProvince(val)
    setDistrict('')
    setValue('province', val)
    setValue('district', '')
  }

  const handleCitySelector = (val: string) => {
    setDistrict(val)
    setValue('district', val)
  }

  const countryOptions = addressData.map((c) => ({
    id: c.id,
    content: c.country,
    value: c.country,
  }))

  const provinces =
    addressData.find((c) => c.country === country)?.provinces || []

  const provinceOptions = provinces.map((p) => ({
    id: p.id,
    content: p.province,
    value: p.province,
  }))

  const districts =
    provinces.find((p) => p.province === province)?.districts?.district || []

  const cityOptions = districts.map((d, index) => ({
    id: index,
    content: d,
    value: d,
  }))

  return (
    <div className="flex flex-col gap-6">
      <div className="text-[16px] font-semibold leading-6">
        ADDRESS INFORMATION
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Country"
              isRequired
              selectData={countryOptions}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select Country"
              value={field.value}
              onValueChange={handleCountrySelector}
              error={errors.country?.message as string}
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
              isRequired
              selectData={provinceOptions}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select Province"
              value={field.value}
              onValueChange={handleProvinceSelector}
              error={errors.province?.message as string}
              disabled={!country || provinceOptions.length === 0}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="City"
              isRequired
              selectData={cityOptions}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="Select city"
              value={field.value}
              onValueChange={handleCitySelector}
              error={errors.city?.message as string}
              disabled={!province || cityOptions.length === 0}
            />
          )}
        />

        <Controller
          name="municipality"
          control={control}
          render={({ field }) => (
            <HRSelect
              Label="Municipality/VDC"
              isRequired
              selectData={municipalityData}
              triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
              placeholder="State"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.municipality?.message as string}
              disabled={false}
            />
          )}
        />

        <HRInput
          Label="Ward"
          type="text"
          isRequired
          placeholder="Ward"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.ward?.message as string}
          {...register('ward')}
        />

        <HRInput
          Label="Address"
          type="text"
          isRequired
          placeholder="Address"
          inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7] bg-white"
          error={errors.address?.message as string}
          {...register('address')}
        />
      </div>
    </div>
  )
}
