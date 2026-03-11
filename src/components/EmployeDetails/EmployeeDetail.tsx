import { EmployeeTab } from '../Tab/EmployeeTab'
import { PersonalInformation } from './PersonalInformation'
import { WorkInformation } from './WorkInformation'

export const EmployeeDetail = () => {
  const tabsData = [
    {
      id: 1,
      value: 'Personal Information',
      triggerText: 'Personal Information',
      content: <PersonalInformation />,
    },
    {
      id: 2,
      value: 'Work Information',
      triggerText: 'Work Information',
      content: <WorkInformation />,
    },
    {
      id: 3,
      value: 'Attendance',
      triggerText: 'Attendance',
      content: '',
    },
    {
      id: 4,
      value: 'Leave Balance',
      triggerText: 'Leave Balance',
      content: '',
    },
    {
      id: 5,
      value: 'Payroll',
      triggerText: 'Payroll',
      content: '',
    },
  ]
  return (
    <div>
      <EmployeeTab
        defaultValue="Personal Information"
        tabClassName=" flex flex-col gap-2"
        tabListClassName="flex py-2 px-0 bg-white rounded-[6px] border border-[#E4E4E7]"
        tabList={tabsData}
        tabTriggerClassName="data-[state=active]:text-[#4F39F6] data-[state=active]:bg-white data-[state=active]:rounded-none data-[state=active]:box-shadow-none px-[44.83px] py-[6px] text-[14px] font-medium leading-5 text-[#71717A] "
        tabsContentClassName="p-6 border border-[#E4E4E7] rounded-[8px] bg-white "
      />
    </div>
  )
}
