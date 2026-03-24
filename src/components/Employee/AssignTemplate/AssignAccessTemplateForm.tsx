import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  assignAccessTemplateSchema,
  type AssignAccessTemplateFormValue,
} from './AssignAccessTemplateForm.zod'
import { useState } from 'react'
import { CheckIcon } from 'lucide-react'
import { HRInput } from '~/components/Input/Input'
import { Tab } from '~/components/Tab/Tab'



export const AssignAccessTemplateForm = ( ) => {
  const { register, handleSubmit, setValue } =
    useForm<AssignAccessTemplateFormValue>({
      resolver: zodResolver(assignAccessTemplateSchema),
      mode: 'onChange',
      defaultValues: {
        assignRole: '',
        dataScope: 'global',
      },
    })
  
  const onsubmit = (data: AssignAccessTemplateFormValue) => {
    console.log('Save Changes: ', data)

  }

  const role = [
    {
      role: 'Super Admin',
      description: 'Full system privileges',
    },
    {
      role: 'HR Manager',
      description: '3 action privileges',
    },
    {
      role: 'Branch Admin',
      description: '1 action privileges',
    },
    {
      role: 'Finance Lead',
      description: '2 action privileges',
    },
    {
      role: 'Employee',
      description: '0 action privileges',
    },
  ]

  const dataScope = [
    {
      id: 0,
      value: 'global',
      content: 'Global',
      branch: [],
    },
    {
      id: 1,
      value: 'limited',
      content: 'Limited',
      branch: [
        { label: 'New York HQ', val: 'ny' },
        { label: 'London Office', val: 'london' },
        { label: 'Tokyo Office', val: 'tokyo' },
        { label: 'San Francisco', val: 'sf' },
        { label: 'Berlin Office', val: 'berlin' },
      ],
    },
    {
      id: 2,
      value: 'self',
      content: 'Self',
      branch: [],
    },
  ]

  const [selectedAssignAccess, setSelectedAssignAccess] = useState('')
  const [selectedDataScope, setSelectedDataScope] = useState('')
  return (
    <>
      <div className="w-full flex flex-col gap-4 ">
        <form onSubmit={handleSubmit(onsubmit)} id="assignTemplate">
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-medium leading-5 text-[#71717A]">
                Step 1: Assign role template
              </div>
              <div className="grid grid-cols-2 gap-3">
                {role.map((item, index) => {
                  const isSelected = selectedAssignAccess === item.role
                  return (
                    <label
                      key={index}
                      className={`border rounded-[6px] p-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#4F39F6] bg-[#EEF2FF]'
                          : 'border-[#E4E4E7]'
                      }`}
                      onClick={() => setSelectedAssignAccess(item.role)}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex  justify-between">
                          <span className="font-medium text-[14px] leading-5 text-[#09090B]">
                            {item.role}
                          </span>
                          {isSelected && (
                            <CheckIcon className="w-5 h-5 text-[#4F39F6]" />
                          )}
                        </div>
                        <span className="text-[12px] text-[#71717A] font-normal leading-4">
                          {item.description}
                        </span>
                      </div>

                      <HRInput
                        type="radio"
                        value={item.role}
                        {...register('assignRole')}
                        className="hidden"
                      />
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-medium leading-5 text-[#71717A]">
                Step 2: Define data scop (branches)
              </div>

              <Tab
                defaultValue="global"
                tabClassName=" flex flex-col gap-2"
                tabListClassName="flex py-2 px-0 bg-[#F4F4F5] rounded-[6px]"
                tabList={dataScope}
                tabTriggerClassName="h-8 px-[44.83px] py-[6px] text-[14px] font-medium leading-5 text-[#71717A] "
                selectedDataScope={selectedDataScope}
                setSelectedDataScope={(val) => {
                  setSelectedDataScope(val)
                  setValue('dataScope', val)
                }}
                {...register('dataScope')}
              />
            </div>

          </div>
        </form>
      </div>
    </>
  )
}
