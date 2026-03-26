import type { ColumnDef } from '@tanstack/react-table'
import { eachDayOfInterval, startOfMonth, endOfMonth, format } from 'date-fns'
import type { WorkRecord, AttendanceStatus } from './WorkRecordData'

const statusConfig: Record<
  AttendanceStatus,
  { label: string; className: string }
> = {
  P: { label: 'P', className: 'text-green-600 bg-[#DCFCE7]' },
  A: { label: 'A', className: 'text-red-600 bg-[#FFE2E2]' },
  L: { label: 'L', className: 'text-blue-600 bg-[#DBEAFE]' },
  H: { label: '-', className: 'text-gray-400 bg-[#F4F4F5]' },
}

export function getWorkRecordColumn(): ColumnDef<WorkRecord>[] {
  const now = new Date()
  const days = eachDayOfInterval({
    start: startOfMonth(now),
    end: endOfMonth(now),
  })

  const dayColumns: ColumnDef<WorkRecord>[] = days.map((day) => {
    // const isWeekend = day.getDay() === 0 || day.getDay() === 6

    return {
      id: format(day, 'yyyy-MM-dd'),
      accessorFn: (row) => row.attendance?.[format(day, 'yyyy-MM-dd')],
      header: () => (
        <div className="text-center text-[12px]">
          <div>{format(day, 'd')}</div>
        </div>
      ),
      meta: {
        className: 'p-0',
      },
      cell: ({ getValue }) => {
        const status = getValue() as AttendanceStatus
        const config = statusConfig[status]
        return (
          <div
            className={`p-4 text-center rounded-none ${config?.className ?? ''}`}
          >
            <span>{config?.label ?? '-'}</span>
          </div>
        )
      },
    }
  })

  return [
    {
      accessorKey: 'employeeName',
      header: 'Employee Name',
      cell: ({ row }) => (
        <div className="text-[12px] font-medium text-primary">
          {row.getValue('employeeName')}
        </div>
      ),
    },
    ...dayColumns,
  ]
}
