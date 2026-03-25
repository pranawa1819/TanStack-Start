import type { ColumnDef } from '@tanstack/react-table'
import { LuEye, LuSettings2, LuGitBranch } from 'react-icons/lu'
import { FaBan } from 'react-icons/fa'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '~/ui/button'
import { Delete } from '~/components/Icon/Delete'
import { AssignAccessTemplateForm } from '../AssignTemplate/AssignAccessTemplateForm'

type ModalSize = 'sm' | 'md' | 'lg'

interface Employee {
  employeeId: string
  name: string
  department: string
  branch: string
  jobLevel: string
  designation: string
  joiningDate?: string
  phone: string
  status: boolean
}

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

interface GetColumnsProps {
  onOpen: GetColumnsProps['onOpen']
  navigate: ReturnType<typeof useNavigate>
}

export function getEmployeeColumns({
  onOpen,
  navigate,
}: GetColumnsProps): ColumnDef<Employee>[] {
  return [
    {
      accessorKey: 'employeeId',
      header: 'Employee ID',
      cell: ({ row }) => (
        <div className="cursor-pointer text-start">
          {row.getValue('employeeId')}
        </div>
      ),
    },

    {
      accessorKey: 'name',
      header: 'Employee Name',
      cell: ({ row }) => {
        const employeeId = row.original.employeeId

        return (
          <div
            className="cursor-pointer text-left hover:underline"
            onClick={() =>
              navigate({
                to: `/employee/personalInformation/${employeeId}`,
              })
            }
          >
            {row.getValue('name')}
          </div>
        )
      },
    },

    {
      accessorKey: 'department',
      header: 'Department',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('department')}
        </div>
      ),
    },

    {
      accessorKey: 'branch',
      header: 'Branch',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">{row.getValue('branch')}</div>
      ),
    },

    {
      accessorKey: 'jobLevel',
      header: 'Job Level',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('jobLevel')}
        </div>
      ),
    },

    {
      accessorKey: 'designation',
      header: 'Designation',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left truncate">
          {row.getValue('designation')}
        </div>
      ),
    },

    {
      accessorKey: 'joiningDate',
      header: 'Joining Date',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">
          {row.getValue('joiningDate') ?? '-'}
        </div>
      ),
    },

    {
      accessorKey: 'phone',
      header: 'Contact',
      cell: ({ row }) => (
        <div className="cursor-pointer text-left">{row.getValue('phone')}</div>
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
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => {
        const employeeId = row.original.employeeId

        return (
          <div className="flex gap-3 items-center">
            <Button
              type="button"
              className="rounded-sm p-1 w-6 h-6"
              onClick={() =>
                navigate({
                  to: '/employee/personalinformation/$id',
                  params: { id: employeeId },
                })
              }
            >
              <LuEye className="text-[16px]" />
            </Button>

            <Button
              type="button"
              className="rounded-sm p-1 w-6 h-6"
              onClick={() =>
                onOpen({
                  modalTitle: 'Assign Access Template',
                  title: 'Assign Access Template',
                  okText: 'Save Changes',
                  size: 'lg',
                  cancelText: 'Cancel',
                  formId: 'assignTemplate',
                  component: <AssignAccessTemplateForm />,
                })
              }
            >
              <LuSettings2 className="text-[16px]" />
            </Button>

            <Button
              type="button"
              className="rounded-sm p-1 w-6 h-6"
              onClick={() =>
                navigate({
                  to: `/employee/assign-approval/$id`,
                  params: { id: employeeId },
                })
              }
            >
              <LuGitBranch className="text-[16px]" />
            </Button>

            <Button type="button" className="rounded-sm p-1 w-6 h-6">
              <FaBan className="text-[16px]" />
            </Button>

            <Button
              type="button"
              className="rounded-sm p-1 w-6 h-6 bg-[#FFE2E2]"
            >
              <Delete fill="#E7000B" />
            </Button>
          </div>
        )
      },
    },
  ]
}
