import { useMemo } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { AttendanceRecord } from '../AttendanceRecord'
import { attendanceListData } from '../AttendanceList/AttendanceListData'
import { getOverTimeAttendanceColumn } from './getOverTimeAttendance'

export function OverTimeAttendanceTable() {
  const columns = useMemo(() => getOverTimeAttendanceColumn(), [])
  const data = useMemo(() => attendanceListData, [])

  const { table } = useDataTable({
    data,
    columns,
    enablePagination: true,
    // manualPagination: true,
    pageSize: 5,
  })

  return (
    <>
      <HRCard
        cardClassName="max-w-[1095px] p-0 border-none rounded-none bg-none shadow-none"
        cardContnetClassName="p-0 flex flex-col gap-8"
      >
        <AttendanceRecord
          isBranch={true}
          isDatePicker={true}
          isSearch={true}
          isShift={true}
          isEmployeeType={false}
        />
        <NormalTable table={table} />
      </HRCard>
    </>
  )
}
