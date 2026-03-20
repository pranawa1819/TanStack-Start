import { myAttendance } from './Schema/MyAttendanceData'
import { LuClock4 } from 'react-icons/lu'
import { LuClockAlert } from 'react-icons/lu'
import { RxCrossCircled } from 'react-icons/rx'
import { LuCalendarClock } from "react-icons/lu";
import { HRCard } from '../Card/Card';

export const MyAttendance = () => {
  return (
    <>
      <HRCard cardClassName="w-full h-153 p-6 bg-white rounded-xl shadow-sm border-none" 
      cardContnetClassName='p-0 flex flex-col gap-4'
      >
        <div className="text-[18px] text-[#09090B] font-medium leading-7">
          My Attendance
        </div>
        <div className="flex flex-col gap-3">
          {myAttendance.map((val, index) => (
            <HRCard
              cardClassName="p-2 bg-[#F9FAFB] rounded-xl overflow-auto shadow-none border-none"
              cardContnetClassName='p-0'
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div
                    className={` p-1 rounded-sm  w-6 h-6
                    ${val.event === 'Present' ? 'bg-[#DCFCE7]' : ''}
                    ${val.event === 'Leave' ? 'bg-[#DBEAFE]' : ''}
                    ${val.event === 'Late' ? 'bg-[#FEF9C2]' : ''}
                    ${val.event === 'Weekend' ? 'bg-[#F4F4F5]' : ''}
                `}
                  >
                    {val.event == 'Present' && (
                      <LuClock4 className="text-[16px] text-green-600" />
                    )}
                    {val.event == 'Leave' && (
                      <LuClock4 className="text-[16px] text-blue-600" />
                    )}
                    {val.event == 'Late' && (
                      <LuClockAlert className="text-[16px] text-yellow-600" />
                    )}
                    {val.event == 'Weekend' && (
                      <RxCrossCircled className="text-[16px] text-gray-600" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className={` text-[12px] leading-5 font-normal
                            ${val.event === 'Present' ? 'text-green-600' : ''}
                            ${val.event === 'Leave' ? 'text-blue-600' : ''}
                            ${val.event === 'Late' ? 'text-yelloe-600' : ''}
                            ${val.event === 'Weekend' ? 'text-gray-600' : ''}
                        `}
                    >
                      {val.event}
                    </span>
                    <span className="text-[12px] leading-5 font-normal text-[#71717A]">
                      {val.clockIn} - {val.clockOut} . {val.workingHours}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] leading-4 font-normal text-[#09090B]">
                    {val.day}
                  </span>
                  <span className="text-[12px] leading-5 font-normal text-[#71717A]">
                    {val.date}
                  </span>
                </div>
              </div>
            </HRCard>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <div className="rounded-sm bg-[#EEF2FF] p-1">
            < LuCalendarClock className="text-[16px] text-[#615FFF]" />
          </div>
          <div className='text-[12px] leading-4 font-medium text-[#4F39F6]'>
            My Attendance Records
          </div>
        </div>
      </HRCard>
    </>
  )
}
