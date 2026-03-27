import { createFileRoute } from '@tanstack/react-router'
import type { BreadcrumbSearch } from '../companysetup'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import PageHeader from '~/ui/header'
import SearchBar from '~/ui/search'
import { DropDown } from '~/components/DropDown/DropDown'
import { LuChevronDown } from 'react-icons/lu'
import { TabsFlex } from '~/components/Tab/TabFlex'
import { Tabs, TabsContent } from '~/ui/tabs'
import DirectoriesCard from '~/components/Directories/DirectoriesCard'
import DirectoriesTable from '~/components/Directories/DirectoriesTable'
import { useState } from 'react'

export const Route = createFileRoute('/directories/')({
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
    label: 'option1',
    value: 'option1',
  },
  {
    label: 'option2',
    value: 'option2',
  },
  {
    label: 'option3',
    value: 'option3',
  },
]

const employeeDetails = [
  {
    employeeID: 'EID11',
    employeeName: 'Samita Pandey',
    branch: 'Baneshwor',
    department: 'Technical',
    designation: 'Frontend Engineer',
    jobLevel: 'Junior',
    email: 'samita@company.com',
    contact: '9810000000',
  },
  {
    employeeID: 'EID12',
    employeeName: 'Sarita Thapa',
    branch: 'Naxal',
    department: 'Design',
    designation: 'UI Designer',
    jobLevel: 'Lead',
    email: 'sarita@company.com',
    contact: '9810000000',
  },
  {
    employeeID: 'EID13',
    employeeName: 'Renu Shrestha',
    branch: 'Kalanki',
    department: 'Technical',
    designation: 'Management',
    jobLevel: 'Accountant',
    email: 'renu@company.com',
    contact: '9810000000',
  },
  {
    employeeID: 'EID14',
    employeeName: 'Sita Tamang',
    branch: 'Pulchowk',
    department: 'Human Resources',
    designation: 'HR',
    jobLevel: 'Senior',
    email: 'sita@company.com',
    contact: '9810000000',
  },
  {
    employeeID: 'EID15',
    employeeName: 'Kamala Adhikari',
    branch: 'Baneshwor',
    department: 'Technical',
    designation: 'Human Resouce',
    jobLevel: 'Junior',
    email: 'emp@company.com',
    contact: '9810000000',
  },
  {
    employeeID: 'EID16',
    employeeName: 'Krishna Pandey',
    branch: 'Baneshwor',
    department: 'Technical',
    designation: 'Software Engineer',
    jobLevel: 'Junior',
    email: 'Krishna Pandey@copany.com',
    contact: '9810000000',
  },
]

function RouteComponent() {
  const search = Route.useSearch()
  const [selected, setSelected] = useState<string>('card')

  return (
    <div>
      <Tabs
        defaultValue="card"
        value={selected}
        onValueChange={(val) => setSelected(val)}
      >
        <BreadCrumb
          className="px-12 pt-6.5"
          crumbListClassName="gap-2"
          crumbItemClassName="text-[14px] font-normal leading-5 gap-2 text-[#71717A]"
          title={search.label ?? ''}
          group={search.group ?? ''}
        />
        <PageHeader title="Employee Directories">
          <div className="ml-auto flex gap-4">
            <SearchBar placeholder="Search.." className="w-65 h-10" />
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

            {selected === 'table' && (
              <div className="flex gap-4">
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
                      Designation
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
            )}

            <TabsFlex />
          </div>
        </PageHeader>
        <div className="mx-6 p-6 bg-[#FFF] rounded-xl">
          <TabsContent value="card">
            <DirectoriesCard data={employeeDetails} />
          </TabsContent>
          <TabsContent value="table">
            <DirectoriesTable data={employeeDetails} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
