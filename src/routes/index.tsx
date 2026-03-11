import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import { CreateAnnouncementForm } from '~/components/CreateAnnouncement/CreateAnnouncementForm'
import { Dialog } from '~/components/Dialog/Dialog'
import { EmployeeDetail } from '~/components/EmployeDetails/EmployeeDetail'
type BreadcrumbSearch = {
  group?: string
  label?: string
  url?: string
  icon?: any
  groupIcon?: any
}
export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),  
  component: App,
})

function App() {
  const search = Route.useSearch()
  const[open,setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col gap-6 p-4">
        <BreadCrumb title={search.label ?? ''} group={search.group ?? ''} />

        <div className="w-full p-4 flex flex-col">
          <h1 className="text-3xl font-bold">Welcome to TanStack Start!</h1>
          <p className="mt-2 text-gray-600">
            This is a starter template for building modern web applications with
            TanStack Start.
          </p>
        </div>

         <Dialog
          open={open}
          onOpenChange={setOpen}
          triggerContent={
            <button
              type="button"
              className="w-60 text-center gap-2 px-4 py-2 bg-[#4F39F6] rounded-xl text-[14px] font-medium leading-5 text-white"
            >
              Create announcement
            </button>
          }
        >
          <CreateAnnouncementForm setOpen={setOpen} />
        </Dialog>

        <EmployeeDetail/>
      </div>
    </>
  )
}
