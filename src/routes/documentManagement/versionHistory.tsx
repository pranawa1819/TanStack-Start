import { createFileRoute } from '@tanstack/react-router'
import { LuChevronDown } from 'react-icons/lu'
import { HRCard } from '~/components/Card/Card'
import DocumentAccordion from '~/components/DocumentManagement/DocumentDropDown'
import type { VersionHistory } from '~/components/DocumentManagement/Types/VersionHistory.type'
import { DropDown } from '~/components/DropDown/DropDown'
import PageHeader from '~/ui/header'

export const Route = createFileRoute('/documentManagement/versionHistory')({
  component: RouteComponent,
})

const options = [
  {
    label: 'Edit',
    value: 'edit',
  },
  {
    label: 'Block',
    value: 'block',
  },
  {
    label: 'Delete',
    value: 'delete',
  },
]

const versionData: VersionHistory[] = [
  {
    employeeName: 'John Doe',
    contract: 'NDA Agreement',
    versions: [
      {
        versionNo: '1',
        date: '2024-03-01 at 10:30',
        changeNote: 'Initial draft created',
      },
      {
        versionNo: '2',
        date: '2024-03-05 at 16:00',
        changeNote: 'Added additional confidentiality clauses',
      },
    ],
  },
  {
    employeeName: 'Kim Namjoon',
    contract: 'NDA Agreement',
    versions: [
      {
        versionNo: '1',
        date: '2024-03-01 at 10:30',
        changeNote: 'Initial draft created',
      },
      {
        versionNo: '2',
        date: '2024-03-05 at 16:00',
        changeNote: 'Added additional confidentiality clauses',
      },
      {
        versionNo: '3',
        date: '2024-03-05 at 16:00',
        changeNote: 'Added additional confidentiality clauses',
      },
    ],
  },
]
function RouteComponent() {
  return (
    <div>
      <PageHeader title="Version History">
        <div className="flex gap-4">
          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                All Documents
                <LuChevronDown className="text-[#71717A]" />
              </button>
            }
            align="end"
            className="pt-1 pb-0 px-0"
          >
            <div
              className=" flex flex-col transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {options.map((item) => (
                <button
                  key={item.value}
                  className="px-2 py-1.5 text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </DropDown>
        </div>
      </PageHeader>
      <HRCard cardClassName="mx-6">
        <DocumentAccordion versionData={versionData} />
      </HRCard>
    </div>
  )
}
