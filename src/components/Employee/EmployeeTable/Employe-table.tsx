import { useMemo } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { getEmployeeColumns } from './getEmployeColumn'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import { employees } from '../Schema/EmployeeTableData'
import { useNavigate } from '@tanstack/react-router'

export const EmployeeTableTest=()=> {
  const { onOpen } = useDialogFormStore()
const navigate = useNavigate()

const columns = useMemo(
  () => getEmployeeColumns({ onOpen, navigate }),
  [onOpen, navigate]
)

  const data = useMemo(() => employees, [])

  const { table } = useDataTable({
    data,
    columns,
    enablePagination: true,
    manualPagination: true,
    pageSize: 5,
  })

  return (
    <div className="px-6 pb-19.5 bg-[#F9FAFB]">
      <HRCard
        cardClassName="max-w-[1122px] p-6 border-none rounded-xl bg-white shadow-sm"
        cardContnetClassName="p-0"
      >
        <NormalTable table={table} />
      </HRCard>
    </div>
  )
}