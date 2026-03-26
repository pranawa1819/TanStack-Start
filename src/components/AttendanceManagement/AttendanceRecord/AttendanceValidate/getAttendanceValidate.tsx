import type { ColumnDef } from '@tanstack/react-table'
import { RxCross2 } from 'react-icons/rx'
import { LuCheck } from 'react-icons/lu'
import type { AttendanceListRecord } from '../AttendanceList/AttendanceListData'

export function getAttendanceValidateColumn(): ColumnDef<AttendanceListRecord>[] {
  return [
    {
      accessorKey: 'employeeId',
      header: 'Employee ID',
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
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('date')}
        </div>
      ),
    },
    {
      accessorKey: 'day',
      header: 'Day',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('day')}
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
      accessorKey: 'checkIn',
      header: 'Check In',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('checkIn')}
        </div>
      ),
    },
    {
      accessorKey: 'checkOut',
      header: 'Check Out',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('checkOut')}
        </div>
      ),
    },
    {
      accessorKey: 'workingHour',
      header: 'Wokring Hours',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('workingHour')}
        </div>
      ),
    },
    {
      accessorKey: 'late',
      header: 'Late (min)',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('late')}
        </div>
      ),
    },
    {
      accessorKey: 'OTIn',
      header: 'OT In',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('OTIn')}
        </div>
      ),
    },
    {
      accessorKey: 'otOut',
      header: 'OT Out',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('otOut')}
        </div>
      ),
    },
    {
      accessorKey: 'overTimeHours',
      header: 'Overtime Hours',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('overTimeHours')}
        </div>
      ),
    },
    {
      accessorKey: 'event',
      header: 'Event',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('event')}
        </div>
      ),
    },
    {
      accessorKey: 'remarks',
      header: 'Remarks',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('remarks')}
        </div>
      ),
    },
    {
      id: 'actions',
      header: 'Action',
      cell: () => (
        <div className="flex items-center gap-2">
          <div className="rounded-sm p-1 w-6 h-6 bg-[#DCFCE7]  cursor-pointer">
            <LuCheck className="text-[16px] text-green-600 " />
          </div>
          <div className="rounded-sm p-1 w-6 h-6 bg-[#FFE2E2]  cursor-pointer">
            <RxCross2 className="text-[16px] text-red-600" />
          </div>
        </div>
      ),
    },
  ]
}
