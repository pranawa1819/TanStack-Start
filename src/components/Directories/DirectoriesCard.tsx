import { LuMail, LuPhone } from 'react-icons/lu'
import InitialsCard from '../DocumentManagement/InitialsCard'
import type { Directories } from './directories.type'

const DirectoriesCard = ({ data }: { data: Directories[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((item) => {
        return (
          <div className="flex flex-col gap-3 shadow-sm border border-[#E4E4E7] rounded-[12px] p-4">
            <div className="flex gap-3 items-center">
              <InitialsCard name={item.employeeName} className="bg-[#18181B]" />
              <div className="flex flex-col">
                <span className="text-[16px] font-medium text-[#09090B]">
                  {item.employeeName}
                </span>
                <span className="text-[14px] font-semibold text-[#71717A]">
                  {item.designation}
                </span>
              </div>
            </div>
            <div className="text-[#71717A] text-[14px] font-medium">
              <span className="flex gap-2 items-center">
                <LuMail /> {item.email}
              </span>
              <span className="flex gap-2 items-center">
                <LuPhone /> {item.contact}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DirectoriesCard
