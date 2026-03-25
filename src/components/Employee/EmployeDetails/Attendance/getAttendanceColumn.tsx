import type { ColumnDef } from '@tanstack/react-table'
import type { Attendance } from './AttendanceTableData'



export function getAttendanceColumns(): ColumnDef<Attendance>[] {
  return [
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => (
        <div className="cursor-pointer text-start">
          {row.getValue('date')}
        </div>
      ),
    },

    {
      accessorKey: 'day',
      header: 'Day',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('day')}
        </div>
      ),
    },

    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const value = row.getValue('status') as boolean

        return (
          <div
            className={`px-3 py-0.5 text-center rounded-[400px] ${
              value
                ? 'bg-[#DCFCE7] text-green-600'
                : 'bg-[#FFE2E2] text-red-600'
            }`}
          >
            {value ? 'Active' : 'Inactive'}
          </div>
        )
      },
    },

    {
      accessorKey: 'checkIn',
      header: 'Check In',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('checkIn')}
        </div>
      ),
    },

    {
      accessorKey: 'checkout',
      header: () => (
        <div className="w-20 flex justify-start text-[14px] font-semibold leading-5">
          Check Out
        </div>
      ),
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('checkout')}
        </div>
      ),
    },

    {
      accessorKey: 'workingHours',
      header: 'Working Hours',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left truncate">
          {row.getValue('workingHours')}
        </div>
      ),
    },

    {
      accessorKey: 'late',
      header: 'Late (mins)',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('late')}
        </div>
      ),
    },

    {
      accessorKey: 'earlyLeave',
      header: 'Early Leave',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('earlyLeave')}
        </div>
      ),
    },

    {
      accessorKey: 'otIn',
      header: 'OT In',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('otIn')}
        </div>
      ),
    },

    {
      accessorKey: 'otOut',
      header: 'OT Out',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('otOut')}
        </div>
      ),
    },

    {
      accessorKey: 'overtime',
      header: 'Overtime Hours',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('overtime')}
        </div>
      ),
    },

    {
      accessorKey: 'event',
      header: 'Events',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('event')}
        </div>
      ),
    },

    {
      accessorKey: 'remarks',
      header: 'Remarks',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('remarks')}
        </div>
      ),
    },
  ]
}