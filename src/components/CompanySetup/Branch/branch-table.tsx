import {
  getCoreRowModel,
  getPaginationRowModel,
  type PaginationState,
  type Updater,
} from '@tanstack/react-table'
import { useDataTable } from '~/hooks/use-data-table'
import { getBranchColumns } from './getBranch'
import { BranchData } from '../BranchData'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { useState } from 'react'

export interface Branch {
  branchId: string
  branch: string
  location: string
  createdDate: number
}

interface BranchTableProps {
  totalItems: number
  pageCount: number
  pagination: PaginationState
  onPaginationChange: (updaterOrValue: Updater<PaginationState>) => void
}

export function BranchTableTest() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const column = getBranchColumns()

  const { table } = useDataTable({
    data: BranchData,
    columns: column,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  console.log('test', table)

  return (
    <div className="px-6 pb-19.5 bg-[#F9FAFB]">
      <HRCard
        cardClassName="w-full p-6 border-none rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
        cardContnetClassName="p-0"
      >
        <NormalTable table={table} />
      </HRCard>
    </div>
  )
}
