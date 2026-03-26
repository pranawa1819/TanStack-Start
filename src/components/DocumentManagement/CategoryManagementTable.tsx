import { useState } from 'react'
import type { CategoryManagement } from './Types/CategoryManagement.type'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import ViewMissingDocument from './ViewMissingDocument'
import { FaEdit } from 'react-icons/fa'
import { LuTrash2 } from 'react-icons/lu'
import { HRTable } from '../Table/Table'
import { LucideEdit } from 'lucide-react'
import AddEditCategoryForm from './AddEditCategoryForm'

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

const CategoryManagementTable = ({
  data,
  onOpen,
}: {
  data: CategoryManagement[]
  onOpen: GetColumnsProps['onOpen']
}) => {
  const [tableData, setTableData] = useState(data)

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  })

  const columnHelper = createColumnHelper<CategoryManagement>()

  const columns = [
    columnHelper.accessor('documentCategory', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-medium text-[#09090B] leading-5">
          Category
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('numOfDocs', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-medium text-[#09090B] leading-5">
          Documents
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor('createdDate', {
      header: () => (
        <div className="w-25 flex justify-start text-[14px] font-medium text-[#09090B] leading-5">
          Created Date
        </div>
      ),
      cell: (info) => (
        <div className="cursor-pointer text-start">{info.getValue()}</div>
      ),
    }),

    columnHelper.display({
      id: 'actions',
      header: () => <div className="flex justify-start">Action</div>,
      cell: (info) => {
        const row = info.row.original
        return (
          <div className="flex gap-3 items-center">
            <LucideEdit
              className="bg-[#F4F4F5] rounded-lg p-1 w-6 h-6 cursor-pointer"
              onClick={() => {
                onOpen({
                  modalTitle: 'Category Management',
                  title: 'Department Management',
                  okText: 'Add',
                  size: 'lg',
                  cancelText: 'Cancel',
                  formId: 'department',
                  component: <AddEditCategoryForm />,
                })
              }}
            />
            <LuTrash2 className="bg-[#FFE2E2] text-[#E7000B] rounded-lg p-1 w-6 h-6 cursor-pointer" />
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
    <div>
      <HRTable
        table={table}
        pageIndex={pagination.pageIndex}
        pageSize={pagination.pageSize}
      />
    </div>
  )
}

export default CategoryManagementTable
