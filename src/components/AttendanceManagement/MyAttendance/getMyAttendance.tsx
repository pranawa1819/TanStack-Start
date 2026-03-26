import type { ColumnDef } from '@tanstack/react-table'
import { LuTentTree, LuTimerReset } from 'react-icons/lu'
import type { Attendance } from '~/components/Employee/EmployeDetails/Attendance/AttendanceTableData'
import { AddTimeRequestForm } from './AddTimeRequestForm'
import { AddLeaveRequestForm } from './AddLeaveRequestForm'
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
    dialogClassName?: string
    onCancel?: () => void
  }) => void
}
export function getMyAttendanceColumns({
  onOpen,
}: GetColumnsProps): ColumnDef<Attendance>[] {
  return [
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => (
        <div className="cursor-pointer text-start">{row.getValue('date')}</div>
      ),
    },

    {
      accessorKey: 'day',
      header: 'Day',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">{row.getValue('day')}</div>
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
        <div className="cursor-pointer text-left">{row.getValue('late')}</div>
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
        <div className="cursor-pointer text-left">{row.getValue('otIn')}</div>
      ),
    },

    {
      accessorKey: 'otOut',
      header: 'OT Out',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">{row.getValue('otOut')}</div>
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
        <div className="cursor-pointer text-left">{row.getValue('event')}</div>
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

    {
      id: 'actions',
      header: 'Action',
      cell: () => (
        <div className="flex items-center gap-2">
          <div
            className="rounded-sm p-1 w-6 h-6 bg-[#F4F4F5]  cursor-pointer"
            onClick={() =>
              onOpen({
                modalTitle: 'Add Time Request',
                title: 'Add Time Request',
                okText: 'Add',
                size: 'lg',
                cancelText: 'Cancel',
                formId: 'addTimeRequest',
                dialogClassName: 'sm:max-w-[709px]',
                component: <AddTimeRequestForm />,
              })
            }
          >
            <LuTimerReset className="text-[16px] text-foreground" />
          </div>
          <div className="rounded-sm p-1 w-6 h-6 bg-[#F4F4F5]  cursor-pointer"
          onClick={() =>
              onOpen({
                modalTitle: 'Add Leave Request',
                title: 'Add Leave Request',
                okText: 'Add',
                size: 'lg',
                cancelText: 'Cancel',
                formId: 'addLeaveRequest',
                dialogClassName: 'max-h-[100vh]',
                component: <AddLeaveRequestForm />,
              })
            }
          >
            <LuTentTree className="text-[16px] text-foreground" />
          </div>
        </div>
      ),
    },
  ]
}
