import { createFileRoute } from '@tanstack/react-router'
import type { BreadcrumbSearch } from '../companysetup'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import { HRCard } from '~/components/Card/Card'
import { AttendanceDetail } from '~/components/AttendanceManagement/AttendanceRecord/AttendanceDetail'

export const Route = createFileRoute('/attendance/')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const search = Route.useSearch()

  return (
    <>
      <div className="w-full h-[calc(100vh-84px)] overflow-auto flex flex-col bg-[#F9FAFB]">
        <BreadCrumb
          className="px-12 pt-6.5"
          crumbListClassName="gap-2"
          crumbItemClassName="text-[14px] font-normal leading-5 gap-2 text-[#71717A]"
          title={search.label ?? ''}
          group={search.group ?? ''}
        />
        <div className="px-12 py-6 text-[20px] font-semibold leading-12 text-[#09090B] ">
          Attendance Record
        </div>
        <div className="px-6 pt-0 pb-32.5 ">
          <HRCard cardClassName='bg-white border-none p-6 shadow-none rounded-xl' cardContnetClassName='p-0'>
          <AttendanceDetail />
          </HRCard>
        </div>
      </div>
    </>
  )
}
