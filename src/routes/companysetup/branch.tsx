import { createFileRoute } from '@tanstack/react-router'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import type { BreadcrumbSearch } from '.'
import { BranchManagement } from '~/components/CompanySetup/BranchManagement'
import { useDialogFormStore } from '~/components/Dialog/form-store'



export const Route = createFileRoute('/companysetup/branch')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
  component: Branch,
})

function Branch() {
  const search = Route.useSearch()
  const {onOpen} = useDialogFormStore();

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
        <BranchManagement onOpen={onOpen}/>
      </div>
    </>
  )
}
