import { HRCard } from '~/components/Card/Card'
import { teamRequestData } from '../Schema/TeamRequestData'

export const Leave = () => {
  const leaveRequests = teamRequestData.filter((val) => val.type === 'Leave')

  return (
    <div className="h-67.5 flex flex-col gap-3 overflow-auto pr-3 notice-scroll">
      {leaveRequests.map((val, index) => (
        <HRCard
          key={index}
          cardClassName="p-2 bg-[#F9FAFB] rounded-xl border-none shadow-none"
          cardContnetClassName="p-0 flex justify-between items-center"
        >
          <div className="flex gap-1 items-center">
            <div className="w-12 h-12 ">
              <img
                src="/Image.png"
                alt="profile"
                className="rounded-[400px] w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[14px] leading-5 font-medium text-[#09090B]">
                {val.name}
              </span>

              <span className="text-[12px] leading-4 font-normal text-[#71717A]">
                {val.subType} . {val.day} . {val.date}
              </span>
            </div>
          </div>

          <div className="flex gap-1">
            <div className="h-6 py-1 px-1.5 rounded-[400px] bg-[#FEFCE8] border border-[#FEF9C2] text-[#D08700] text-[12px] leading-4">
              Pending
            </div>

            <div className="h-6 py-1 px-1.5 rounded-[400px] bg-[#DCFCE7] text-green-600 text-[12px] leading-4">
              Approved
            </div>

            <div className="h-6 py-1 px-1.5 rounded-[400px] bg-white border border-[#E4E4E7] text-[#09090B] text-[12px] leading-4">
              Reject
            </div>
          </div>
        </HRCard>
      ))}
    </div>
  )
}
