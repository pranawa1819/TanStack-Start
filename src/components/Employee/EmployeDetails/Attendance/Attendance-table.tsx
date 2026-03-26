import { useMemo } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { attendanceRecord } from './AttendanceTableData'
import { getAttendanceColumns } from './getAttendanceColumn'

export function AttendanceTableTest() {
  const columns = useMemo(() => getAttendanceColumns(), [])
  const data = useMemo(() => attendanceRecord, [])
  
  const { table } = useDataTable({
    data,
    columns,
    enablePagination: true,
    // manualPagination: false,
    pageSize: 5,
  })

  return (
      <HRCard
        cardClassName="max-w-[1050px] border-none rounded-none bg-white shadow-none"
        cardContnetClassName="p-0"
      >
        <NormalTable table={table} />
      </HRCard>
  )
}