import { createFileRoute } from '@tanstack/react-router'
import { LuChevronDown } from 'react-icons/lu'
import { DatePicker } from '~/components/DatePicker/DatePicker'
import DocumentVisibilityTable from '~/components/DocumentManagement/DocumentVisibilityTable'
import { DropDown } from '~/components/DropDown/DropDown'
import PageHeader from '~/ui/header'
import type { BreadcrumbSearch } from '../companysetup'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'

export const Route = createFileRoute('/documentManagement/visibility')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
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

const tableData = [
  {
    document: 'Tax Form W-4',
    employeeName: 'Arjun Sapkota',
    category: 'Tax',
    uploadDate: '12/12/2023',
    visibility: true,
  },
  {
    document: 'Employment Contract - 2024',
    employeeName: 'Sangita Thapa',
    category: 'Contracts',
    uploadDate: '01/11/2024',
    visibility: true,
  },
  {
    document: 'Performance Review Q1 2024',
    employeeName: 'Sagar Thapa',
    category: 'Agreements',
    uploadDate: '01/11/2024',
    visibility: false,
  },
  {
    document: 'NDA Agreement',
    employeeName: 'Rajan Magar',
    category: 'Policies',
    uploadDate: '04/05/2025',
    visibility: false,
  },
]

function RouteComponent() {
  const search = Route.useSearch()

  const today = new Date()

  const format = (date: Date) =>
    date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })

  const placeholderDate = `${format(today)} - ${format(today)}`
  return (
    <div>
      <BreadCrumb
        className="px-12 pt-6.5"
        crumbListClassName="gap-2"
        crumbItemClassName="text-[14px] font-normal leading-5 gap-2 text-[#71717A]"
        title={search.label ?? ''}
        group={search.group ?? ''}
      />
      <PageHeader title="Document Visibility">
        <div className="flex gap-4">
          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                All Categories
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

          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Status
                <LuChevronDown className="text-[#71717A]" />
              </button>
            }
            align="end"
            className="pt-1 pb-0 px-0"
          >
            <div
              className=" flex flex-col  transition-colors"
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

          <DatePicker
            placeholder={placeholderDate}
            className="bg-[#FFF] h-10"
            placeHolderClassName="text-sm font-medium"
          />
        </div>
      </PageHeader>

      <DocumentVisibilityTable data={tableData}></DocumentVisibilityTable>
    </div>
  )
}
