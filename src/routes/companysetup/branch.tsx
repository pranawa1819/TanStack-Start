import { createFileRoute } from '@tanstack/react-router'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import type { BreadcrumbSearch } from '.'
import { HRInput } from '~/components/Input/Input'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { AddDepartmentForm } from '~/components/CompanySetup/AddDepartmentFrom'
import { Dialog } from '~/components/Dialog/Dialog'
import { BranchCard } from '~/components/CompanySetup/BranchCard'
import { BranchTable } from '~/components/CompanySetup/BranchTable'
import { List } from '~/components/Icon/List'
import { Grid } from '~/components/Icon/Grid'


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
  const [searchData, setSearchData] = useState('')
  const [open, setOpen] = useState(false)
  const [branch, setBranch] = useState<'card' | 'table'>('card')

  //   const filterData = searchData
  //     ? data.data?.filter((item) => {
  //         return item.title.toLowerCase().includes(searchData)
  //       })
  //     : []

  // const branchData = [
  //   {
  //     id: 0,
  //     value: 'branch-Card',
  //     triggerText: <List />,
  //     content: <BranchCard />,
  //   },
  //   {
  //     id: 1,
  //     value: 'branch-table',
  //     triggerText: <Grid />,
  //     content: <BranchTable />,
  //   },
  // ]
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
            Branch Management
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
                className="border rounded-[6px] px-11 pr-4 py-2.5 border-[#E4E4E7] bg-white leading-5"
              />
              <Search
                className="rounded-3xl absolute left-5 top-2.5"
                size={16}
                color="gray"
              />
            </div>

            <div className="flex items-center ">
              <button
                onClick={() => setBranch('card')}
                className={`p-3 border border-[#4F39F6] cursor-pointer rounded-l-xl ${
                  branch === 'card' ? 'bg-white' : 'bg-[#4F39F6]'
                }`}
              >
                <List
                  fill={`${branch === 'card' ? 'black' : 'white'}`}
                />
              </button>

              <button
                onClick={() => setBranch('table')}
                className={`p-3 border border-[#4F39F6] cursor-pointer rounded-r-xl  ${
                  branch === 'table' ? 'bg-white ' : 'bg-[#4F39F6]'
                }`}
              >
                <Grid
                  fill={`${branch === 'table' ? 'black' : 'white'}`}
                />
              </button>
            </div>

            <Dialog
              open={open}
              onOpenChange={setOpen}
              triggerContent={
                <button
                  type="button"
                  className="text-center px-4 py-2.5 bg-[#4F39F6] rounded-xl text-[14px] font-medium leading-5 text-white"
                >
                  Add Branch
                </button>
              }
              className="p-4"
            >
              <AddDepartmentForm setOpen={setOpen} />
            </Dialog>
          </div>
        </div>

        {branch === 'card' ? <BranchCard /> : <BranchTable />}
      </div>
    </>
  )
}
