import { useMemo } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { getBranchColumns } from './getBranch'
import { BranchData } from '../BranchData'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'

export function BranchTableTest() {
  const columns = useMemo(() => getBranchColumns(), [])
  const data = useMemo(() => BranchData, [])
  
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
        cardClassName="w-full p-6 border-none rounded-xl bg-white shadow-sm"
        cardContnetClassName="p-0"
      >
        <NormalTable table={table} />
      </HRCard>
    </div>
  )
}