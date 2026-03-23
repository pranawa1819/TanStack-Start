import { EmployeeTab } from '../Tab/EmployeeTab'
import { AttendanceInformation } from './EmployeDetails/Attendance'
import { Education } from './EmployeDetails/Education'
import { LeaveBalance } from './EmployeDetails/LeaveBalance'
import { PersonalInformation } from './EmployeDetails/PersonalInformation'
import { WorkInformation } from './EmployeDetails/WorkInformation'

export const EmployeeDetail = ({ employeeId }: { employeeId: string }) => {
  const tabsData = [
    {
      id: 1,
      value: 'Personal Information',
      triggerText: 'Personal Information',
      content: <PersonalInformation employeeId = {employeeId}/>,
    },
    {
      id: 2,
      value: 'Work Information',
      triggerText: 'Work Information',
      content: <WorkInformation employeeId = {employeeId}/>,
    },
    {
      id: 3,
      value: 'Attendance',
      triggerText: 'Attendance',
      content: <AttendanceInformation />
    },
    {
      id: 4,
      value: 'Leave Balance',
      triggerText: 'Leave Balance',
      content: <LeaveBalance />
    },
    {
      id: 5,
      value: 'Payroll',
      triggerText: 'Payroll',
      content: '',
    },
    {
      id: 6,
      value: 'Education',
      triggerText: 'Education',
      content: <Education />,
    },
    {
      id: 7,
      value: 'Document',
      triggerText: 'Document',
      content: '',
    },
  ]
  return (
    <>
    <div>
      <EmployeeTab
        defaultValue="Personal Information"
        tabClassName=" flex flex-col gap-8"
        tabListClassName="flex py-0 px-3 bg-white rounded-[6px] border border-[#E4E4E7]"
        tabList={tabsData}
        tabTriggerClassName="h-9 data-[state=active]:text-[#4F39F6] data-[state=active]:bg-transparent data-[state=active]:rounded-none data-[state=active]:shadow-none px-4 py-3  text-[14px] font-medium leading-5 text-[#71717A] data-[state=active]:border-b-2 data-[state=active]:border-b-[#4F39F6]"
        tabsContentClassName="py-6 pl-6 pr-3 border border-[#E4E4E7] rounded-[8px] bg-white "
      />
    </div>
    </>
  )
}
