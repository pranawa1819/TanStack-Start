import { eventData } from './Schema/EventData'
import { GoGift } from 'react-icons/go'
import { LuFlag } from 'react-icons/lu'
import { LuPartyPopper } from 'react-icons/lu'
import { LuSparkles } from 'react-icons/lu'
import { HRCard } from '../Card/Card'

export const Event = () => {
  return (
    <>
      <HRCard
        cardClassName="w-full h-153 p-6 bg-white rounded-xl shadow-sm border-none"
        cardContnetClassName="p-0 flex flex-col gap-4"
      >
        <div className="text-[18px] text-[#09090B] font-medium leading-7">
          Events & Celebrations
        </div>
        <div className="flex flex-col gap-3">
          {eventData.map((val, index) => (
            <HRCard
              cardClassName="p-2 bg-[#F9FAFB] rounded-xl overflow-auto border-none shadow-none"
              cardContnetClassName="p-0"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div
                    className={` p-1 rounded-sm  w-6 h-6
                            ${val.eventType === 'Event' ? 'bg-[#DCFCE7]' : ''}
                            ${val.eventType === 'Birthday' ? 'bg-[#DBEAFE]' : ''}
                            ${val.eventType === 'Anniversary' ? 'bg-[#DBEAFE]' : ''}
                            ${val.eventType === 'Holiday' ? 'bg-[#FFE2E2]' : ''}
                        `}
                  >
                    {val.eventType == 'Event' && (
                      <LuPartyPopper className="text-[16px] text-green-600" />
                    )}
                    {val.eventType == 'Anniversary' && (
                      <LuSparkles className="text-[16px] text-blue-600" />
                    )}
                    {val.eventType == 'Birthday' && (
                      <GoGift className="text-[16px] text-blue-600" />
                    )}
                    {val.eventType == 'Holiday' && (
                      <LuFlag className="text-[16px] text-red-600" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] leading-5 font-medium text-[#09090B]">
                      {val.title}
                    </span>
                    <span className="text-[12px] leading-4 font-normal text-[#71717A]">
                      {val.date} . {val.description}
                    </span>
                  </div>
                </div>
                <div
                  className={`h-6 py-1 px-2 rounded-[400px] font-normal text-[12px] leading-4
                            ${val.eventType === 'Event' ? 'bg-[#DCFCE7] text-green-600' : ''}
                            ${val.eventType === 'Birthday' ? 'bg-[#DBEAFE] text-blue-600' : ''}
                            ${val.eventType === 'Anniversary' ? 'bg-[#DBEAFE] text-blue-600' : ''}
                            ${val.eventType === 'Holiday' ? 'bg-[#FFE2E2] text-red-600' : ''}
                        `}
                >
                  {val.eventType}
                </div>
              </div>
            </HRCard>
          ))}
          <div className="text-[12px] leading-4 font-normal text-[#71717A] flex justify-end">See More</div>
        </div>
      </HRCard>
    </>
  )
}
