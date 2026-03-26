import type { ColumnDef } from '@tanstack/react-table'
import type { AttendanceListRecord } from '../AttendanceList/AttendanceListData'
import { LuEye } from 'react-icons/lu'

export function getAttendanceHistoryColumn(
  setShowTable: React.Dispatch<React.SetStateAction<boolean>>
): ColumnDef<AttendanceListRecord>[] {
  return [
    {
      accessorKey: 'employeeId',
      header: 'EMployee ID',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('employeeId')}
        </div>
      ),
    },
    {
      accessorKey: 'employeeName',
      header: 'Employee Name',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('employeeName')}
        </div>
      ),
    },
    {
      accessorKey: 'branch',
      header: 'Branch ',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('branch')}
        </div>
      ),
    },

    {
      accessorKey: 'shift',
      header: 'Shift',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('shift')}
        </div>
      ),
    },

    {
      accessorKey: 'workType',
      header: 'Work Type',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('workType')}
        </div>
      ),
    },

    {
      accessorKey: 'employeeType',
      header: 'Employee Type',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('employeeType')}
        </div>
      ),
    },

    {
      id: 'actions',
      header: 'Action',
      cell: () => (
        <div
          className="rounded-sm p-1 w-6 h-6 bg-[#F4F4F5]  cursor-pointer"
          onClick={() => setShowTable(true)}
        >
          <LuEye className="text-[16px] text-foreground " />
        </div>
      ),
    },
  ]
}
