import { createFileRoute } from '@tanstack/react-router'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import type { BreadcrumbSearch } from '.'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import { DepartmentManagement } from '~/components/CompanySetup/DepartmentManagement'

export const Route = createFileRoute('/companysetup/departmentmanagement')({
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
  const { onOpen } = useDialogFormStore()

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
        <DepartmentManagement onOpen={onOpen} />
      </div>
    </>
  )
}
