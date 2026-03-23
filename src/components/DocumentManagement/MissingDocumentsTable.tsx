import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { HRCard } from '../Card/Card'
import { HRTable } from '../Table/Table'
import { LuEye } from 'react-icons/lu'
import type { MissingDocument } from './Schema/MissingDocument.type'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

const MissingDocumentsTable = ({ data }: { data: MissingDocument[] }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  })
  const navigate = useNavigate()

  const columnHelper = createColumnHelper<MissingDocument>()

  const columns = [
    columnHelper.accessor('employeeId', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-semibold leading-5">
          Employee ID
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('employeeName', {
      header: () => (
        <div className="w-30 flex justify-start text-[14px] font-semibold leading-5">
          Employee Name
        </div>
      ),
      cell: (info) => {
        const row = info.row.original

        return (
          <div
            className="cursor-pointer text-left"
            onClick={() =>
              navigate({
                to: `/employee/personalInformation/${row.employeeId}`,
              })
            }
          >
            {info.getValue()}
          </div>
        )
      },
    }),

    columnHelper.accessor('department', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Department
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('branch', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Branch
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('missingDocument', {
      header: () => (
        <div className="w-20 flex justify-start text-[14px] font-semibold leading-5">
          Mising Document
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('priority', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Priority
        </div>
      ),
      cell: (info) => {
        const row = info.getValue()
        const isMediumPriority = row.toLowerCase() === 'medium'
        const isHighPriority = row.toLowerCase() === 'high'
        return (
          <div
            className="cursor-pointer text-[12px] font-semibold items-center flex justify-center w-fit truncate py-0.5 px-3 rounded-[400px]"
            style={{
              color: isHighPriority
                ? '#E7000B'
                : isMediumPriority
                  ? '#D08700'
                  : '#71717A',
              backgroundColor: isHighPriority
                ? '#FFE2E2'
                : isMediumPriority
                  ? '#FEF9C2'
                  : '#F4F4F5',
            }}
          >
            {row}
          </div>
        )
      },
    }),

    columnHelper.display({
      id: 'actions',
      header: () => <div className="flex justify-start">Action</div>,
      cell: (info) => {
        const row = info.row.original
        return (
          <div className="flex gap-3 items-center">
            <div
              className="bg-[#F4F4F5] rounded-sm p-1 w-6 h-6 cursor-pointer"
              onClick={() =>
                navigate({
                  to: `/employee/personalInformation/${row.employeeId}`,
                })
              }
            >
              <LuEye className="text-[16px]" />
            </div>
          </div>
        )
      },
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
    <div className="px-6 pb-19.5 bg-[#F9FAFB] ">
      <HRCard
        cardClassName="max-w-[1122px] p-6 border-none rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
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

export default MissingDocumentsTable
