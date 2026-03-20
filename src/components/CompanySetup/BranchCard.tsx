import { HRCard } from '../Card/Card'
import { departmentData } from './DepartmentData'
import { Delete } from '../Icon/Delete'
import { FiEdit } from 'react-icons/fi'

export const BranchCard = () => {
  return (
    <>
      <div className="px-6 pb-19.5 bg-[#F9FAFB]">
        <HRCard
          cardClassName="p-6 border-none rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
          cardContnetClassName="flex gap-4 p-0"
        >
          {departmentData.map((items, index) => (
            <HRCard
              key={index}
              cardClassName="p-4 border border-[#E4E4E7] rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
              cardContnetClassName="flex flex-col gap-4 p-0"
            >
              <div className="flex justify-between">
                <div className="w-8 h-8">
                  <img
                    src="/network.svg"
                    className="h-full w-full object-cover "
                  />
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#F4F4F5] rounded-sm p-1 w-6 h-6">
                    <FiEdit className='text-[16px] font-black'/>
                  </div>

                  <div className="bg-[#FFE2E2] rounded-sm p-1 w-6 h-6">
                    <Delete fill="#E7000B" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col  text-[16px] leading-6 font-medium">
                <span className="text-[#09090B]">{items.department}</span>
                <span className="text-[#71717A] ">{items.code}</span>
              </div>
            </HRCard>
          ))}
        </HRCard>
      </div>
    </>
  )
}
