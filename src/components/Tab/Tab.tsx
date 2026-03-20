import { type ReactNode } from 'react'
import { Tabs as Root, TabsContent, TabsList, TabsTrigger } from '~/ui/tabs'
import { CheckIcon } from 'lucide-react'
import { HRInput } from '../Input/Input'
import { HRLabel } from '../Label/Label'

interface TabDataType {
  id: number
  content: ReactNode
  value: string
  branch: {
    label: string
    val: string
  }[]
}

interface TabProps {
  defaultValue: string
  tabClassName: string
  tabListClassName: string
  tabList: TabDataType[]
  tabTriggerClassName: string
  selectedDataScope: string
  setSelectedDataScope: (value: string) => void
}

export const Tab = ({
  defaultValue,
  tabClassName,
  tabListClassName,
  tabList,
  tabTriggerClassName,
  selectedDataScope,
  setSelectedDataScope,
  ...props
}: TabProps) => {
  // console.log(selectedDataScope);
  return (
    <Root defaultValue={defaultValue} className={tabClassName}>
      <TabsList className={`flex w-full ${tabListClassName}`}>
        {tabList.map((val) => (
          <TabsTrigger
            key={val.id}
            value={val.value}
            className={`${tabTriggerClassName} 
    data-[state=active]:text-[#4F39F6]
  `}
          >
            {val.content}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabList.map((val) => (
        <TabsContent key={val.id} value={val.value}>
          <div className="grid grid-cols-2 gap-3">
            {val.branch.map((branchItem, index) => {
              const isSelected = selectedDataScope === branchItem.label

              return (
                <HRLabel
                  key={index}
                  labelClassName={`border rounded-[6px] p-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#4F39F6] bg-[#EEF2FF]'
                      : 'border-[#E4E4E7]'
                  }`}
                  onClick={() => setSelectedDataScope(branchItem.label)}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-[14px] leading-5 text-[#09090B]">
                      {branchItem.label}
                    </span>

                    {isSelected && (
                      <CheckIcon className="w-5 h-5 text-[#4F39F6]" />
                    )}
                  </div>

                  <HRInput
                    type="radio"
                    value={selectedDataScope}
                    className="hidden"
                    {...props}
                  />
                </HRLabel>
              )
            })}
          </div>
        </TabsContent>
      ))}
    </Root>
  )
}
