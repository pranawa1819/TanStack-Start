import { createFileRoute } from '@tanstack/react-router'
import { LuChevronDown } from 'react-icons/lu'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import MissingDocumentsTable from '~/components/DocumentManagement/MissingDocumentsTable'
import { DropDown } from '~/components/DropDown/DropDown'
import PageHeader from '~/ui/header'
import SearchBar from '~/ui/search'
import type { BreadcrumbSearch } from '../companysetup'

export const Route = createFileRoute('/documentManagement/')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Missing Documents',
      title: 'Missing Documents',
    }
  },
})

const tableData = [
  {
    employeeId: 'EID01',
    employeeName: 'Aa',
    department: 'Technical',
    branch: 'Baneshwor',
    missingDocument: '2',
    priority: 'High',
  },
  {
    employeeId: 'EID02',
    employeeName: 'Bb',
    department: 'Technical',
    branch: 'Baneshwor',
    missingDocument: '2',
    priority: 'Medium',
  },
  {
    employeeId: 'EID03',
    employeeName: 'Cc',
    department: 'Technical',
    branch: 'Baneshwor',
    missingDocument: '1',
    priority: 'Low',
  },
]

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

function RouteComponent() {
  const { onOpen } = useDialogFormStore()
  const search = Route.useSearch()

  return (
    <div>
      <BreadCrumb
        className="px-12 pt-6.5"
        crumbListClassName="gap-2"
        crumbItemClassName="text-[14px] font-normal leading-5 gap-2 text-[#71717A]"
        title={search.label ?? ''}
        group={search.group ?? ''}
      />
      <PageHeader title="Missing Documents">
        <SearchBar placeholder="Search by name or EID" className="w-65 h-10" />
        <div className="ml-4 flex gap-4">
          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Department
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

          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Branch
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

          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Priority
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
        </div>
      </PageHeader>
      <MissingDocumentsTable data={tableData} onOpen={onOpen} />
    </div>
  )
}
