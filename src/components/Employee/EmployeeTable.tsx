import { useState } from 'react'
import { HRCard } from '../Card/Card'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { HRTable } from '../Table/Table'
import { employees, type Employee } from './Schema/EmployeeTableData'
import { LuEye } from 'react-icons/lu'
import { LuSettings2 } from 'react-icons/lu'
import { FaBan } from 'react-icons/fa'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '~/ui/button'
import { Delete } from '../Icon/Delete'
import { LuGitBranch } from 'react-icons/lu'
import { AssignAccessTemplateForm } from './AssignTemplate/AssignAccessTemplateForm'

type ModalSize = 'sm' | 'md' | 'lg'

interface GetColumnsProps {
  onOpen: <T extends string>(config: {
    title: T
    modalTitle: string | null
    okText: React.ReactNode
    component: React.ReactNode
    cancelText?: string | React.ReactNode
    size?: ModalSize
    formId?:string
    onCancel?: () => void
  }) => void
}

export const EmployeeTable = ({ onOpen }: GetColumnsProps) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  })
  const navigate = useNavigate()

  const columnHelper = createColumnHelper<Employee>()

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

    columnHelper.accessor('name', {
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

    columnHelper.accessor('jobLevel', {
      header: () => (
        <div className="w-20 flex justify-start text-[14px] font-semibold leading-5">
          Job Level
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('designation', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Designation
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left truncate">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor('joiningDate', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Joining Date
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue() ?? '-'}</div>
      ),
    }),

    columnHelper.accessor('phone', {
      header: () => (
        <div className="flex justify-start text-[14px] font-semibold leading-5">
          Contact
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-left">{info.getValue()}</div>
      ),
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
    columnHelper.display({
      id: 'actions',
      header: () => <div className="flex justify-start">Action</div>,
      cell: (info) => {
        const row = info.row.original
        return (
          <div className="flex gap-3 items-center">
            <Button
              type="button"
              variant="default"
              className="rounded-sm p-1 w-6 h-6 cursor-pointer"
               onClick={() =>
                navigate({
                  to: `/employee/personalinformation/${row.employeeId}`,
                })
              }
            >
              <LuEye className="text-[16px]" />
            </Button>

            <Button
              type="button"
              variant="default"
              className="rounded-sm p-1 w-6 h-6 cursor-pointer"
              onClick={() => {
                onOpen({
                  modalTitle: 'Assign Access Template',
                  title: 'Assign Access Template',
                  okText: 'Save Changes',
                  size: 'lg',
                  cancelText: 'Cancel',
                  formId:"assignTemplate",
                  component: <AssignAccessTemplateForm/>,
                })
              }}
            >
              <LuSettings2 className="text-[16px]" />
            </Button>

            <Button
              type="button"
              variant="default"
              className="rounded-sm p-1 w-6 h-6 cursor-pointer"
              onClick={() =>
                navigate({
                  to: `/employee/assign-approval/${row.employeeId}`,
                })
              }
            >
              <LuGitBranch className="text-[16px]" />
            </Button>

            <Button
              type="button"
              variant="default"
              className="rounded-sm p-1 w-6 h-6 cursor-pointer "
            >
              <FaBan className="text-[16px]" />
            </Button>

            <Button
              type="button"
              variant="default"
              className="rounded-sm p-1 w-6 h-6 cursor-pointer bg-[#FFE2E2] "
            >
              <Delete fill="#E7000B" />
            </Button>
          </div>
        )
      },
    }),
  ]

  const table = useReactTable({
    columns,
    data: employees,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <div className="px-6 pb-19.5 bg-[#F9FAFB]">
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
    </>
  )
}
