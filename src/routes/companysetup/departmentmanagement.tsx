import { createFileRoute } from '@tanstack/react-router'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import type { BreadcrumbSearch } from '.'
import { HRInput } from '~/components/Input/Input'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { HRCard } from '~/components/Card/Card'
import { departmentData } from '~/components/CompanySetup/DepartmentData'
import { Delete } from '~/components/Icon/Delete'
import { Edit } from '~/components/Icon/Edit'
import { AddDepartmentForm } from '~/components/CompanySetup/AddDepartmentFrom'
import { Dialog } from '~/components/Dialog/Dialog'

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
  const [searchData, setSearchData] = useState('')
  const [open, setOpen] = useState(false)

  //   const filterData = searchData
  //     ? data.data?.filter((item) => {
  //         return item.title.toLowerCase().includes(searchData)
  //       })
  //     : []
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
        <div className="flex justify-between px-12 py-6 ">
          <div className="text-[20px] font-semibold leading-12 text-[#09090B] ">
            Department Management
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative w-58">
              <HRInput
                type="text"
                value={searchData}
                onChange={(e) => {
                  setSearchData(e.target.value)
                }}
                placeholder="Search.."
                className="border rounded-[6px] px-11 pr-4 py-2.5 border-[#E4E4E7] bg-white"
              />
              <Search
                className="rounded-3xl absolute left-5 top-3"
                size={16}
                color="gray"
              />
            </div>
            <Dialog
              open={open}
              onOpenChange={setOpen}
              triggerContent={
                <button
                  type="button"
                  className="text-center px-4 py-2.5 bg-[#4F39F6] rounded-xl text-[14px] font-medium leading-5 text-white"
                >
                  Add Department
                </button>
              }
              className="p-4"
            >
                <AddDepartmentForm setOpen={setOpen} />
            </Dialog>
          </div>
        </div>
      
      <div className="px-6 pb-19.5 bg-[#F9FAFB]">
        <HRCard
          cardClassName="p-6 border-none rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
          cardContnetClassName="flex gap-4 p-0"
        >
          {departmentData.map((items, index) => (
            <HRCard
              key={index}
              cardClassName="p-4 border border-[#E4E4E7] rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
              cardContnetClassName="flex flex-col gap-4 p-0 border-none"
            >
              <div className="flex justify-between">
                <div className="w-8 h-8">
                  <img
                    src="/network.svg"
                    className="h-full w-full object-cover "
                  />
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#F4F4F5] rounded-sm p-1 w-6 h-6">
                    <Edit />
                  </div>

                  <div className="bg-[#FFE2E2] rounded-sm p-1 w-6 h-6">
                    <Delete fill="#E7000B" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col  text-[16px] leading-6 font-medium">
                <span className="text-[#09090B]">{items.department}</span>
                <span className="text-[#71717A] ">{items.code}</span>
              </div>
            </HRCard>
          ))}
        </HRCard>
      </div>
      </div>
    </>
  )
}
