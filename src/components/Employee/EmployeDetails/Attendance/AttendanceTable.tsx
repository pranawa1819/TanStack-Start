import { useState } from 'react'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { HRTable } from '~/components/Table/Table'
import { attendanceRecord, type Attendance } from './AttendanceTableData'
import { HRCard } from '~/components/Card/Card'

export const AttendanceTable = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  })

  const columnHelper = createColumnHelper<Attendance>()

  const columns = [
    columnHelper.accessor('date', {
      header: () => (
        <div className=" flex justify-start text-[14px] font-semibold leading-5">
          Date
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('day', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Day
        </div>
      ),
      cell: (info) => {
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      },
    }),
    columnHelper.accessor('status', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Status
        </div>
      ),
      cell: (info) => {
        const value = info.getValue()

        return (
          <div
            className={`px-3 py-0.5 text-center rounded-[400px] ${value ? 'bg-[#DCFCE7] text-green-600' : 'bg-[#FFE2E2] text-red-600'}`}
          >
            {value ? 'Active' : 'Inactive'}
          </div>
        )
      },
    }),

    columnHelper.accessor('checkIn', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Check In
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('checkout', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Check Out
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('workingHours', {
      header: () => (
        <div className="w-30 flex justify-start text-[14px] font-semibold leading-5">
          Working Hours
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left truncate">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('late', {
      header: () => (
        <div className="w-20 flex justify-start text-[14px] font-semibold leading-5">
          Late (mins)
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('earlyLeave', {
      header: () => (
        <div className="w-20 flex justify-start text-[14px] font-semibold leading-5">
          Early Leave
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('otIn', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          OT In
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('otOut', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          OT Out
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('overtime', {
      header: () => (
        <div className="w-30 flex justify-start text-[14px] font-semibold leading-5">
          Overtime Hours
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('event', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Events
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('remarks', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Remarks
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),
  ]

  const table = useReactTable({
    columns,
    data: attendanceRecord,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <HRCard
        cardClassName="max-w-[1050px] p-0 border-none rounded-none bg-white shadow-none"
        cardContnetClassName="p-0"
      >
        <HRTable
          table={table}
          pageIndex={pagination.pageIndex}
          pageSize={pagination.pageSize}
        />
      </HRCard>
    </>
  )
}
