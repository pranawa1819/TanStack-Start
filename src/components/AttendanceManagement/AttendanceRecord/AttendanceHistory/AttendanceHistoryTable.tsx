import { useMemo, useState } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { attendanceListData } from '../AttendanceList/AttendanceListData'
import { getAttendanceHistoryColumn } from './getAttendanceHistory'
import { AttendanceListTable } from '../AttendanceList/AttendanceListTable'
import { AttendanceRecord } from '../AttendanceRecord'

export function AttendanceHistoryTable() {
    const [showTable, setShowTable] = useState(false)
  const columns = useMemo(() => getAttendanceHistoryColumn(setShowTable), [])
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
        cardClassName="max-w-[1095px] overflow-auto p-0 border-none rounded-none bg-none shadow-none"
        cardContnetClassName="p-0 flex flex-col gap-8"
      >
        <AttendanceRecord  isBranch={true} isDatePicker={true} isSearch={true} isShift={true} isEmployeeType={true}/>
        {showTable ? <AttendanceListTable isAttendanceRecord={false}/>:
        <NormalTable table={table} />
        }
      </HRCard>
    </>
  )
}