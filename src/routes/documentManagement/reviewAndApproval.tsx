import { createFileRoute } from '@tanstack/react-router'
import { LuChevronDown } from 'react-icons/lu'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import { ReviewCard } from '~/components/DocumentManagement/ReviewCard'
import { DropDown } from '~/components/DropDown/DropDown'
import PageHeader from '~/ui/header'
import SearchBar from '~/ui/search'
import type { BreadcrumbSearch } from '../companysetup'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'

export const Route = createFileRoute('/documentManagement/reviewAndApproval')({
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

const cardData = [
  {
    employeeId: 'EID01',
    fileName: 'Passport Copy',
    uploadedBy: 'Sarah Johnson',
    employeeName: 'Sarah Pandey',
    employeeDepartment: 'Technical',
    date: '2024-03-15',
    size: '3.2 MB',
    type: 'Personal IDs',
    status: 'Pending',
    rejectedReason: '',
  },
  {
    employeeId: 'EID02',
    fileName: 'Citizenship Copy',
    uploadedBy: 'Sarah Pandey',
    employeeName: 'Ram Kumar',
    employeeDepartment: 'Technical',
    date: '2024-03-15',
    size: '3.2 MB',
    type: 'Personal IDs',
    status: 'Accepted',
    rejectedReason: '',
  },
  {
    employeeId: 'EID03',
    fileName: 'License Copy',
    uploadedBy: 'Sarah Pandey',
    employeeName: 'John Doe',
    employeeDepartment: 'Technical',
    date: '2024-03-15',
    size: '3.2 MB',
    type: 'Personal IDs',
    status: 'Rejected',
    rejectedReason:
      'Document is too blurry and text is not readable. Please upload a clearer scan or photo.',
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
      <PageHeader title="Review and Approval">
        <SearchBar placeholder="Search by name or EID" className="w-65 h-10" />
        <div className="ml-4 flex gap-4">
          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Document Type
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
        </div>
      </PageHeader>

      <div className="p-6 bg-[#FFF] mx-6 rounded-xl flex flex-col gap-6">
        {cardData.map((item, index) => (
          <ReviewCard key={index} data={item} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}
