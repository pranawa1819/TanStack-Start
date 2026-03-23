import { HRInput } from '~/components/Input/Input'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { HRCard } from '~/components/Card/Card'
import { departmentData } from '~/components/CompanySetup/DepartmentData'
import { Delete } from '~/components/Icon/Delete'
import { Edit } from '~/components/Icon/Edit'
import { AddDepartmentForm } from '~/components/CompanySetup/AddDepartmentFrom'
import { Button } from '~/ui/button'

type ModalSize = 'sm' | 'md' | 'lg'

interface GetColumnsProps {
  onOpen: <T extends string>(config: {
    title: T
    modalTitle: string | null
    okText: React.ReactNode
    component: React.ReactNode
    cancelText?: string | React.ReactNode
    size?: ModalSize
    formId?: string
    onCancel?: () => void
  }) => void
}

export const DepartmentManagement = ({ onOpen }: GetColumnsProps) => {
   const [searchData, setSearchData] = useState('')
  
    //   const filterData = searchData
    //     ? data.data?.filter((item) => {
    //         return item.title.toLowerCase().includes(searchData)
    //       })
    //     : []
  return (
    <>
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
           <div className="flex justify-end">
            <Button
              type="button"
              variant="secondary"
              className="cursor-pointer text-[14px] font-medium leading-5 text-white"
              onClick={() => {
                onOpen({
                  modalTitle: 'Department Management',
                  title: 'Department Management',
                  okText: 'Add',
                  size: 'lg',
                  cancelText: 'Cancel',
                  formId: 'department',
                  component: <AddDepartmentForm />,
                })
              }}
            >
              Add Department
            </Button>
          </div>
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
    </>
  )
}


