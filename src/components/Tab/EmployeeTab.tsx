import { type ReactNode } from 'react'
import { Tabs as Root, TabsContent, TabsList, TabsTrigger } from '~/ui/tabs'

interface TabDataType {
  id: number
  content: ReactNode
  value: string
  triggerText: string
}

interface TabProps {
  defaultValue: string
  tabClassName: string
  tabListClassName: string
  tabList: TabDataType[]
  tabTriggerClassName: string
  tabsContentClassName: string
}

export const EmployeeTab = ({
  defaultValue,
  tabClassName,
  tabListClassName,
  tabList,
  tabTriggerClassName,
  tabsContentClassName,
}: TabProps) => {
  return (
    <Root defaultValue={defaultValue} className={tabClassName}>
      <TabsList className={`flex w-full ${tabListClassName}`}>
        {tabList.map((val) => (
          <TabsTrigger
            key={val.id}
            value={val.value}
            className={`${tabTriggerClassName}`}
          >
            {val.triggerText}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabList.map((val) => (
        <TabsContent value={val.value} key={val.id} className={tabsContentClassName}>
          {val.content}
        </TabsContent>
      ))}
    </Root>
  )
}
