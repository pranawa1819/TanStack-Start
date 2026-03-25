import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { DocumentVisibility } from './Types/DocumentVisibility.type'
import { HRCard } from '../Card/Card'
import { HRTable } from '../Table/Table'
import { useState } from 'react'
import { Switch } from '~/ui/switch'

const DocumentVisibilityTable = ({ data }: { data: DocumentVisibility[] }) => {
  const [tableData, setTableData] = useState(data)
  const updateRow = (rowIndex: number, value: boolean) => {
    setTableData((prev) =>
      prev.map((row, index) =>
        index === rowIndex ? { ...row, visibility: value } : row,
      ),
    )
  }
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  })
  const columnHelper = createColumnHelper<DocumentVisibility>()
  const columns = [
    columnHelper.accessor('document', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold leading-5">
          Document
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('employeeName', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold leading-5">
          Employee Name
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('category', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold leading-5">
          Category
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[12px] font-semibold text-[#71717A] rounded-full bg-[#F4F4F5] w-fit py-0.5 px-3">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('uploadDate', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold leading-5">
          Upload Date
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('visibility', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold leading-5">
          Visibility
        </div>
      ),
      cell: (info) => {
        const value = Boolean(info.getValue())
        const rowIndex =
          info.row.index + pagination.pageIndex * pagination.pageSize

        return (
          // switch doesnot work
          <div className="cursor-pointer text-start">
            <Switch
              onClick={(e) => e.stopPropagation()}
              checked={value}
              onCheckedChange={(checked) => {
                updateRow(rowIndex, checked)
              }}
            />
          </div>
        )
      },
    }),
  ]

  const table = useReactTable({
    columns,
    data: tableData,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  return (
    <div className="px-6 pb-19.5 bg-[#F9FAFB]">
      <HRCard
        cardClassName="p-6 border-none rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
        cardContnetClassName="p-0"
      >
        <HRTable
          table={table}
          pageIndex={pagination.pageIndex}
          pageSize={pagination.pageSize}
        />
      </HRCard>
    </div>
  )
}

export default DocumentVisibilityTable
