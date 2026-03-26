import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import InitialsCard from './InitialsCard'
import VersionCard from './VersionCard'
import type { VersionHistory } from './Types/VersionHistory.type'
import { useState } from 'react'

const DocumentAccordion = ({
  versionData,
}: {
  versionData: VersionHistory[]
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {versionData.map((documents, index) => {
        const sortedVersions = [...documents.versions].sort(
          (a, b) => Number(b.versionNo) - Number(a.versionNo),
        )
        const latestVersionNo = Number(sortedVersions[0]?.versionNo)
        const isOpen = openIndexes.includes(index)

        return (
          <div
            key={index}
            className="border border-[#E4E4E7] rounded-xl overflow-hidden"
          >
            {/* Accordion Trigger */}
            <div
              className="bg-[#F4F4F5] p-6 flex gap-4 items-center cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <InitialsCard name={documents.employeeName} />
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold">
                  {documents.contract}
                </span>
                <span className="text-[12px] font-normal">
                  Employee:{' '}
                  <span className="font-medium">{documents.employeeName}</span>
                </span>
                <span className="text-[12px] font-normal text-[#71717A]">
                  {documents.versions.length} version(s)
                </span>
              </div>
              <span className="ml-auto text-[#09090B] text-xl">
                {isOpen ? <LuChevronUp /> : <LuChevronDown />}
              </span>
            </div>

            {/* Accordion Content */}
            <div
              className={`flex flex-col gap-3 p-6 transition-all duration-300 overflow-hidden ${
                isOpen ? '' : 'hidden'
              }`}
            >
              {sortedVersions.map((item) => {
                const isCurrent = Number(item.versionNo) === latestVersionNo
                return (
                  <VersionCard
                    key={item.versionNo}
                    data={item}
                    isCurrent={isCurrent}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DocumentAccordion
