import { useState } from 'react'
import { HRCard } from '../../Card/Card'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Edit } from '../../Icon/Edit'
import { Delete } from '../../Icon/Delete'
import { BranchData } from '../BranchData'
import { HRTable } from '../../Table/Table'

export const BranchTable = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('branchId', {
      header: () => <div className="flex justify-start">Branch ID</div>,
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('branch', {
      header: () => <div className="flex justify-start">Branch</div>,
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('location', {
      header: () => <div className="flex justify-start">Location</div>,
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('createdDate', {
      header: () => <div className="flex justify-start">Created Date</div>,
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue() ?? '-'}</div>
      ),
    }),

    columnHelper.display({
      id: 'actions',
      header: () => <div className="flex justify-start">Action</div>,
      cell: () => {
        return (
          <div className="flex gap-2 items-center">
            <Edit />

            <Delete fill="red" />
          </div>
        )
      },
    }),
  ]

  const table = useReactTable({
    columns,
    data: BranchData,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <div className="px-6 pb-19.5 bg-[#F9FAFB]">
        <HRCard
          cardClassName="w-full  p-6 border-none rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
          cardContnetClassName="p-0"
        >
          <HRTable
            table={table}
            pageIndex={pagination.pageIndex}
            pageSize={pagination.pageSize}
          />
        </HRCard>
      </div>
    </>
  )
}
