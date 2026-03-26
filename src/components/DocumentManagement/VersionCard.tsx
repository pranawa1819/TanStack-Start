import { LuDownload, LuEye } from 'react-icons/lu'
import type { VersionItem } from './Types/VersionHistory.type'

const VersionCard = ({
  data,
  isCurrent,
}: {
  data: VersionItem
  isCurrent: boolean
}) => {
  return (
    <div className="border border-[#E4E4E7] rounded-xl p-6 flex">
      <div className="text-[12px] text-black">
        <div className="font-semibold flex gap-2 items-center mb-1.5">
          Version {data.versionNo}
          {isCurrent && (
            <span className="bg-[#DBEAFE] text-[#155DFC] text-[12px] font-semibold py-0.5 px-3 rounded-full flex items-center w-fit">
              Current
            </span>
          )}
        </div>
        <div className="font-normal text-[#71717A]">{data.date}</div>
        <div className="font-normal text-[#71717A]">Uploaded by Legal Team</div>
        <div className="font-semibold text-[#09090B]">
          Change Note: <span className="font-normal">{data.changeNote}</span>
        </div>
      </div>
      <div className="flex gap-2 ml-auto">
        <LuDownload className="text-[#09090B] bg-[#F4F4F5] rounded-lg p-1 w-6 h-6 cursor-pointer" />
        <LuEye className="text-[#09090B] bg-[#F4F4F5] rounded-lg p-1 w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
}

export default VersionCard
