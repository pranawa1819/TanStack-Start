import { useState } from 'react'
import type { Directories } from './directories.type'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { HRTable } from '../Table/Table'

const DirectoriesTable = ({ data }: { data: Directories[] }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  })

  const columnHelper = createColumnHelper<Directories>()

  const columns = [
    columnHelper.accessor('employeeID', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Employee ID
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('employeeName', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Employee Name
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('branch', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Branch
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('department', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Department
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('designation', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Designation
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('jobLevel', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Job Level
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('contact', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Contact
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('email', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold text-[#71717A] leading-5">
          Email
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start text-[14px] font-medium text-[#09090B]">
          {info.getValue()}
        </div>
      ),
    }),
  ]

  const table = useReactTable({
    columns,
    data: data,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <HRTable
      table={table}
      pageIndex={pagination.pageIndex}
      pageSize={pagination.pageSize}
    />
  )
}

export default DirectoriesTable
