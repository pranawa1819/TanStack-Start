import { HRInput } from '~/components/Input/Input'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { BranchCard } from '~/components/CompanySetup/BranchCard'
import { BranchTable } from '~/components/CompanySetup/Branch/BranchTable'
import { List } from '~/components/Icon/List'
import { Grid } from '~/components/Icon/Grid'
import { AddBranchForm } from '~/components/CompanySetup/AddBranchForm'
import { Button } from '~/ui/button'
import { BranchTableTest } from './Branch/branch-table'
import { TabsFlex } from '../Tab/TabFlex'
import { Tabs, TabsContent } from '~/ui/tabs'

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

export const BranchManagement = ({ onOpen }: GetColumnsProps) => {
  const [searchData, setSearchData] = useState('')
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
      <Tabs defaultValue="card">
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

            <TabsFlex />

            <div className="flex justify-end">
              <Button
                type="button"
                variant="secondary"
                className="cursor-pointer text-[14px] font-medium leading-5 text-white"
                onClick={() => {
                  onOpen({
                    modalTitle: 'Branch  Details',
                    title: 'Branch  Details',
                    okText: 'Add',
                    size: 'lg',
                    cancelText: 'Cancel',
                    formId: 'branch',
                    component: <AddBranchForm />,
                  })
                }}
              >
                Add Branch
              </Button>
            </div>
          </div>
        </div>
        <TabsContent value="card">
          <BranchCard />
        </TabsContent>
        <TabsContent value="table">
          <BranchTableTest />
        </TabsContent>
      </Tabs>
    </>
  )
}
