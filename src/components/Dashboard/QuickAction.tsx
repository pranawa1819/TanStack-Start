import { HRCard } from '../Card/Card'
import { quickAccessData } from './Schema/QuickActionData'

export const QuickAction = () => {
  return (
    <>
       <HRCard
          cardClassName="w-full h-87.5 p-6 bg-white border-none rounded-xl shadow-sm  "
          cardContnetClassName="p-0 flex flex-col gap-4"
        >
        <div className="text-[18px] text-[#09090B] font-medium leading-7">
          Quick Actions
        </div>
        <div className="grid grid-cols-2 gap-3">
          {quickAccessData.map((val, index) => {
            const Icon = val.icon
            return (
              <HRCard
                cardClassName="p-6 border border-[#615FFF] rounded-xl bg-white shadow-sm"
                cardContnetClassName='flex flex-col p-0 gap-3 items-center'
                key={index}
              >
                <div className="rounded-sm bg-[#EEF2FF] p-1">
                  <Icon className="text-[16px] text-[#615FFF]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[14px] text-[#09090B] font-medium leading-5">
                    Leave Request
                  </span>
                  <span className="text-[12px] text-[#71717A] font-medium leading-4">
                    Request for leave
                  </span>
                </div>
              </HRCard>
            )
          })}
        </div>
      </HRCard>
    </>
  )
}
