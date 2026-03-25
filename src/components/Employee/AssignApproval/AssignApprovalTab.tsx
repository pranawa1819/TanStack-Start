import { EmployeeTab } from '~/components/Tab/EmployeeTab'
import { LeaveTimeOff } from './LeaveTimeOff'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import { OverTimeRequest } from './OverTimeRequest'

export const AssignApproval = ({ employeeId }: { employeeId: string }) => {
  const { onOpen } = useDialogFormStore()
  const tabsData = [
    {
      id: 1,
      value: 'Leave/ Time Off',
      triggerText: 'Leave/ Time Off',
      content: <LeaveTimeOff onOpen={onOpen} />,
    },
    {
      id: 2,
      value: 'Overtime Request',
      triggerText: 'Overtime Request',
      content: <OverTimeRequest onOpen={onOpen} />,
    },
    {
      id: 3,
      value: 'Asset Requisition',
      triggerText: 'Asset Requisition',
      content: <OverTimeRequest onOpen={onOpen} />,
    },
  ]
  return (
    <>
      <div>
        <EmployeeTab
          defaultValue="Leave/ Time Off"
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
