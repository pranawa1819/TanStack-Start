import type { ColumnDef } from '@tanstack/react-table'
import { Edit} from 'lucide-react'
import { Delete } from '~/components/Icon/Delete'

interface Branch {
  branchId: string
  branch: string
  location: string
  createdDate?: number
}

export function getBranchColumns(): ColumnDef<Branch>[] {
  return [
    {
      accessorKey: 'branchId',
      header: 'Branch ID',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('branchId')}
        </div>
      ),
    },

    {
      accessorKey: 'branch',
      header: 'Branch',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('branch')}
        </div>
      ),
    },

    {
      accessorKey: 'location',
      header: 'Location',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('location')}
        </div>
      ),
    },

    {
      accessorKey: 'createdDate',
      header: 'Created Date',
      cell: ({ row }) => {
        return (<div className="text-[12px] font-medium text-primary">
          {row.getValue('createdDate')}
        </div>)
      },
    },

    {
      id: 'actions',
      header: 'Action',
      cell: () => (
        <div className="flex items-center gap-2">
          <div className="rounded-sm p-1 w-6 h-6 bg-[#F4F4F5]  cursor-pointer">
            <Edit className="w-4 h-4" />
          </div>
          <div className="rounded-sm p-1 w-6 h-6 bg-[#F4F4F5]  cursor-pointer">
            <Delete fill="red" />
          </div>
        </div>
      ),
    },
  ]
}
