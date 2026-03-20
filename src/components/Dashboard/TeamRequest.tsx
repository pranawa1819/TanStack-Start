import { HRCard } from '../Card/Card'
import { EmployeeTab } from '../Tab/EmployeeTab'
import { Leave } from './TeamRequest/Leave'
import { OT } from './TeamRequest/OT'
import { Time } from './TeamRequest/Time'

export const TeamRequest = () => {
     const tabsData = [
        {
          id: 1,
          value: 'Leave',
          triggerText: 'Leave',
          content: <Leave />,
        },
        {
          id: 2,
          value: 'OT',
          triggerText: 'OT',
          content: <OT />,
        },
        {
          id: 3,
          value: 'Time',
          triggerText: 'Time',
          content: <Time />,
        },
       
      ]
  return (
    <>
      <HRCard cardClassName="w-full h-99 py-6 pl-6 pr-3 bg-white rounded-xl shadow-sm border-none"
      cardContnetClassName='flex flex-col gap-4 p-0'
      >
        <div className="text-[18px] text-[#09090B] font-medium leading-7">
          Team Request
        </div>
        <EmployeeTab
                defaultValue="Leave"
                tabClassName=" flex flex-col gap-3"
                tabListClassName="flex gap-6 py-2 px-0 bg-white rounded-none"
                tabList={tabsData}
                tabTriggerClassName="h-9 rounded-none data-[state=active]:text-[#4F39F6] data-[state=active]:bg-white data-[state=active]:rounded-none data-[state=active]:shadow-none px-[44.83px] py-[6px] text-[14px] font-medium leading-5 text-[#71717A]  data-[state=active]:border-b-2 data-[state=active]:border-b-[#4F39F6]"
                tabsContentClassName="rounded-[8px] bg-white "
              />
      </HRCard>
    </>
  )
}
